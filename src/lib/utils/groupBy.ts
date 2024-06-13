import type { GroupByHandlerParams, GroupByParams, GroupByRuleParams, GroupByRuleReturn } from '$lib/types/GroupByTypes'
import { type Entry, type FilterOptions, formatDayMonthYear, type Group, type Report } from '$lib/utils/format'
import { sortObjectArrayByNumber } from '$lib/utils/orderby'
import type { ClickupTaskStatusOnTask, ClockifyTimeEntry } from '../../graphql/generated'
import { formatUserNamesDailyParticipation, formatUserNamesSortedByParticipation } from './clockifyServices'
import { GroupByEnum } from '$lib/enums/GroupByEnum'

// Rules:
// - Functions that are responsible for generating subgroups from a group following some grouping rule.

const groupByDatesRule = (input: GroupByRuleParams): GroupByRuleReturn[] => [
  {
    groupName:
      formatDayMonthYear(input.entry.timeEntry[0]?.end || new Date().toDateString()) ??
      input.entry.timeEntry[0]?.clockifyProject?.name ??
      'No project',
    editedEntry: input.entry,
  } satisfies GroupByRuleReturn,
]

const groupByProjectsRule = (input: GroupByRuleParams): GroupByRuleReturn[] => [
  {
    groupName:
      input.entry.task?.list?.[0]?.clickupList?.name ?? input.entry.timeEntry[0]?.clockifyProject?.name ?? 'No project',
    editedEntry: input.entry,
  } satisfies GroupByRuleReturn,
]

const groupByStatusRule = (input: GroupByRuleParams): GroupByRuleReturn[] => {
  let lastStatus = 'No Status'
  // Só é pra ser agrupado de acordo com o clickup,
  // se o log for só so clockfy será considerado como No Status
  if (input.entry.task && input.entry.task?.status.length > 0) {
    input.entry.task.status = sortObjectArrayByNumber(
      input.entry.task.status,
      (item: ClickupTaskStatusOnTask) => Date.parse(item.createdAt),
      false,
    )

    const lastClickupStatus: ClickupTaskStatusOnTask = input.entry.task.status[0]
    if (lastClickupStatus.statusName) lastStatus = lastClickupStatus.statusName
  }
  return [
    {
      groupName: lastStatus,
      editedEntry: input.entry,
    } satisfies GroupByRuleReturn,
  ]
}

const groupByAssigneeRule = (input: GroupByRuleParams): GroupByRuleReturn[] => {
  const reports: GroupByRuleReturn[] = []
  const assignees: string[] = input.entryRoute[0]
    ? formatUserNamesSortedByParticipation(input.entry.timeEntry).split(', ').flat()
    : formatUserNamesDailyParticipation(input.entry.timeEntry, input.entryRoute[0])
  assignees.forEach((assignee: string) => {
    const assigneeEntries: ClockifyTimeEntry[] = input.entry.timeEntry.filter(
      (timeEntry: ClockifyTimeEntry) => timeEntry.clockifyUser.name.trim() === assignee.trim(),
    )
    if (assigneeEntries) {
      reports.push({
        groupName: assignee,
        editedEntry: {
          task: input.entry.task,
          timeEntry: assigneeEntries,
        } satisfies Entry,
      } satisfies GroupByRuleReturn)
    }
  })
  return reports
}

// Extra
const isTogroupByProp = (selectedGroupBy: FilterOptions[], prop: string) =>
  Boolean(selectedGroupBy.some((item: FilterOptions): boolean => item.label === prop))

// Group By's
// - Functions that are responsible for initiating the visit cycle for each subgroup and applying the rule of some Rule.
const groupByDates = (param: GroupByParams) =>
  groupByHandler({
    groupContent: param.entriesToGroup,
    isToGroup: isTogroupByProp(param.selectedGroupBy, GroupByEnum.DATE),
    defaultGroupName: getDefaultGroupName(GroupByEnum.DATE),
    groupRoute: [],
    groupByRule: groupByDatesRule,
  } satisfies GroupByHandlerParams)

const groupByProjects = (param: GroupByParams) =>
  groupByHandler({
    groupContent: param.entriesToGroup,
    isToGroup: isTogroupByProp(param.selectedGroupBy, GroupByEnum.PROJECT),
    defaultGroupName: getDefaultGroupName(GroupByEnum.PROJECT),
    groupRoute: [],
    groupByRule: groupByProjectsRule,
  } satisfies GroupByHandlerParams)

const groupByStatus = (param: GroupByParams) =>
  groupByHandler({
    groupContent: param.entriesToGroup,
    isToGroup: isTogroupByProp(param.selectedGroupBy, GroupByEnum.STATUS),
    defaultGroupName: getDefaultGroupName(GroupByEnum.STATUS),
    groupRoute: [],
    groupByRule: groupByStatusRule,
  } satisfies GroupByHandlerParams)

const groupByAssignee = (param: GroupByParams) =>
  groupByHandler({
    groupContent: param.entriesToGroup,
    isToGroup: isTogroupByProp(param.selectedGroupBy, GroupByEnum.ASSIGNEE),
    defaultGroupName: getDefaultGroupName(GroupByEnum.ASSIGNEE),
    groupRoute: [],
    groupByRule: groupByAssigneeRule,
  } satisfies GroupByHandlerParams)

// Main logic
const groupByFunctionsMap: Map<GroupByEnum, (param: GroupByParams) => Group> = new Map([
  [GroupByEnum.PROJECT, groupByProjects],
  [GroupByEnum.ASSIGNEE, groupByAssignee],
  [GroupByEnum.STATUS, groupByStatus],
  [GroupByEnum.DATE, groupByDates],
])

export function getDefaultGroupName(group: GroupByEnum) {
  return `all${group as string}`
}

export const allDefaultGroupName: string[] = Object.values(GroupByEnum).map((group) => getDefaultGroupName(group))

export const hierarchyGroupBy = (entriesToGroup: Group | Report, selectedGroupBy: FilterOptions[]): Group => {
  let newEntriesToGroup: Group | Report = { ...entriesToGroup }
  Object.values(GroupByEnum).forEach((groupBy) => {
    const groupByFunction = groupByFunctionsMap.get(groupBy)
    const groupByFunctionParams: GroupByParams = {
      entriesToGroup: newEntriesToGroup,
      selectedGroupBy,
    }
    if (groupByFunction) newEntriesToGroup = groupByFunction(groupByFunctionParams)
  })
  return newEntriesToGroup as Group
}

// Generic Handler
const groupByReportHandler = (tableGroupBy: GroupByHandlerParams, oldGroup: Group): Group => {
  const group: Group = oldGroup
  if (tableGroupBy.isToGroup) {
    const castedReport: Report = tableGroupBy.groupContent as unknown as Report
    for (const [idTask, task] of Object.entries(castedReport)) {
      // Returns a new Entry so that any internal value can be edited if necessary.
      const reports = tableGroupBy.groupByRule({
        entry: task,
        entryRoute: tableGroupBy.groupRoute,
      } satisfies GroupByRuleParams)
      for (const report of reports) {
        // Initializes if it doesn't exist and then sets the value.
        if (!group[report.groupName]) group[report.groupName] = {}
        if (!group[report.groupName][idTask]) group[report.groupName][idTask] = {}
        group[report.groupName][idTask] = report.editedEntry
      }
    }
  } else {
    group[tableGroupBy.defaultGroupName] = tableGroupBy.groupContent
  }
  return group
}

const groupByGroupHandler = (tableGroupBy: GroupByHandlerParams, oldGroup: Group): Group => {
  const group: Group = oldGroup
  for (const [groupName, groupValue] of Object.entries(tableGroupBy.groupContent)) {
    // It HAS to be .slice() to prevent passing the reference.
    const newRoute: string[] = tableGroupBy.groupRoute.slice()
    newRoute.push(groupName)
    const newGroup = groupByHandler({
      groupContent: groupValue,
      isToGroup: tableGroupBy.isToGroup,
      defaultGroupName: tableGroupBy.defaultGroupName,
      groupRoute: newRoute,
      groupByRule: tableGroupBy.groupByRule,
    })
    // If an entry already exists, it will perform the union between the two.
    if (group[groupName]) {
      group[groupName] = { ...group[groupName], ...newGroup } as Group
    } else {
      group[groupName] = newGroup
    }
  }
  return group
}

/**
 * If you're going to work on the groupHandler function and are having trouble understanding how it works, think of it
 * as (it's not exactly the same, but it's to try to facilitate understanding) a converter from a list to a BTree in
 * levels (in this case, this function will always have the same number of levels, which is the number of groupBy's).
 *
 * The return is:
 * - A leaf node if the returns is from groupByReportHandler function
 * - Part of the tree if the returns is from groupByGroupHandler function
 * - The complete tree if the returns is from a group by function
 */
const groupByHandler = (tableGroupBy: GroupByHandlerParams): Group => {
  let group: Group = {}
  const taskArray = Object.values(tableGroupBy.groupContent)
  if (taskArray.length === 0) return group
  // If it has a timeEntry or task, it's a report; otherwise, it's a group.
  if (taskArray[0].timeEntry !== undefined || taskArray[0].task !== undefined) {
    group = groupByReportHandler(tableGroupBy, group)
  } else {
    group = groupByGroupHandler(tableGroupBy, group)
  }
  return group
}
