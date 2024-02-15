import type { GroupByRuleParams, GroupByRuleReturn, GroupByHandlerParams } from '$lib/types/GroupByTypes'
import { type Entry, type FilterOptions, formatDayMonthYear, type Group, type Report } from '$lib/utils/format'
import { sortObjectArrayByNumber } from '$lib/utils/orderby'
import type { ClickupTaskStatusOnTask, ClockifyTagOnTimeEntry, ClockifyTimeEntry } from '../../graphql/generated'
import { formatUserNamesDailyParticipation, formatUserNamesSortedByParticipation } from './clockifyServices'

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
  if (input.entry.task && input.entry.task?.status.length > 0) {
    input.entry.task.status = sortObjectArrayByNumber(
      input.entry.task.status,
      (item: ClickupTaskStatusOnTask) => Date.parse(item.createdAt),
      false,
    )

    const lastClickupStatus: ClickupTaskStatusOnTask = input.entry.task.status[0]
    if (lastClickupStatus.statusName) lastStatus = lastClickupStatus.statusName
  } else {
    input.entry.timeEntry = sortObjectArrayByNumber(
      input.entry.timeEntry,
      (item: ClockifyTimeEntry) => Date.parse(item.end),
      false,
    )
    const lastClockfyEntry: ClockifyTimeEntry = input.entry.timeEntry[0]
    if (lastClockfyEntry && lastClockfyEntry.tags.length > 0) {
      lastClockfyEntry.tags = sortObjectArrayByNumber(
        lastClockfyEntry.tags,
        (item: ClockifyTagOnTimeEntry) => Date.parse(item.createdAt),
        false,
      )
      const lastTagStatus: ClockifyTagOnTimeEntry = lastClockfyEntry.tags[0]
      if (lastTagStatus.clockifyTag.name) lastStatus = lastTagStatus.clockifyTag.name
    }
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
const groupByDates = (entriesToGroup: Group | Report, selectedGroupBy: FilterOptions[]) =>
  groupByHandler({
    groupContent: entriesToGroup,
    isToGroup: isTogroupByProp(selectedGroupBy, 'Date'),
    defaultGroupName: 'allDates',
    groupRoute: [],
    groupByRule: groupByDatesRule,
  } satisfies GroupByHandlerParams)

const groupByProjects = (entriesToGroup: Group | Report, selectedGroupBy: FilterOptions[]) =>
  groupByHandler({
    groupContent: entriesToGroup,
    isToGroup: isTogroupByProp(selectedGroupBy, 'Project'),
    defaultGroupName: 'allProjects',
    groupRoute: [],
    groupByRule: groupByProjectsRule,
  } satisfies GroupByHandlerParams)

const groupByStatus = (entriesToGroup: Group | Report, selectedGroupBy: FilterOptions[]) =>
  groupByHandler({
    groupContent: entriesToGroup,
    isToGroup: isTogroupByProp(selectedGroupBy, 'Status'),
    defaultGroupName: 'allStatus',
    groupRoute: [],
    groupByRule: groupByStatusRule,
  } satisfies GroupByHandlerParams)

const groupByAssignee = (entriesToGroup: Group | Report, selectedGroupBy: FilterOptions[]) =>
  groupByHandler({
    groupContent: entriesToGroup,
    isToGroup: isTogroupByProp(selectedGroupBy, 'Assignee'),
    defaultGroupName: 'allAssignees',
    groupRoute: [],
    groupByRule: groupByAssigneeRule,
  } satisfies GroupByHandlerParams)

// Main logic
export const hierarchyGroupBy = (entriesToGroup: Group | Report, selectedGroupBy: FilterOptions[]): Group => {
  return groupByAssignee(
    groupByStatus(groupByProjects(groupByDates(entriesToGroup, selectedGroupBy), selectedGroupBy), selectedGroupBy),
    selectedGroupBy,
  )
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
