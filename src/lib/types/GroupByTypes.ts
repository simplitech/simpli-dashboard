import type { Entry, Group, Report } from '$lib/utils/format'

/**
 * @type {GroupByRuleParams} - Generic type for passing information to and between group by rules.
 * @property entry - Record for the creation of new subgroups and editing of entries.
 * @property entryRoute - The keywords to navigate from the beginning to the current group.
 */
export type GroupByRuleParams = {
  entry: Entry
  entryRoute: string[]
}

/**
 * @type {GroupByRuleReturn} - Generic type for returning information to and between group by rules.
 * @property groupName - The name of the category for the grouped entries after editing.
 * @property editedEntry - The result of the entry edit performed by the group by rules.
 */
export type GroupByRuleReturn = {
  groupName: string
  editedEntry: Entry
}

/**
 * @type {GroupByHandlerParams} - Generic type for passing information to and between handlers.
 * @property groupContent - Content (Group) that will be divided into subgroups.
 * @property groupByRule - Rule for dividing the group into subgroups. Check "Rules" in "groupBy.ts" file.
 * @property isToGroup - Check whether to divide the group into subgroups(true) or keep everything in a single group(false).
 * @property defaultGroupName - The name of the same single group mentioned in the variable isToGroup.
 * @property groupRoute - The keywords to navigate from the beginning to the current group.
 */
export type GroupByHandlerParams = {
  groupContent: Group | Report
  isToGroup: boolean
  defaultGroupName: string
  groupRoute: string[]
  groupByRule: (input: GroupByRuleParams) => GroupByRuleReturn[]
}
