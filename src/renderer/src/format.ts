import {
  formatUserNamesSortedByParticipation,
  sumDurations,
  getMainGroupOfDurations,
  clockifyUrl,
  type TimeEntryReportDetailedTimeEntry,
} from './clockifyServices'
import { durationRoundUpByHalfHour } from './helper'
import { getTaskTimeStatus, type Task, type TimeEntry } from './clickupServices'

interface Entry {
  task: Task
  clickupTimeEntry: TimeEntry[]
  timeEntry: TimeEntryReportDetailedTimeEntry[]
}

export const formatReport: Record<
  string,
  (id: string, entry: Entry, dateRangeStart: Date, dateRangeEnd: Date) => string
> = {
  'Task ID': (id, entry) => (entry.task ? id : 'Flex') + '\t',
  'ClickUp URL': (_id, entry) => (entry.task ? entry.task.url + '\t' : '' + '\t'),
  Description: (id, entry) => (entry.task?.name ?? id) + '\t',
  Project: (_id, entry) => (entry.task?.list.name ?? entry.timeEntry?.[0]?.projectName ?? 'No project') + '\t',
  'Clockify URL': (id, entry, dateRangeStart, dateRangeEnd) =>
    entry.timeEntry?.length ? clockifyUrl(dateRangeStart, dateRangeEnd, id) + '\t' : '' + '\t',
  Logged: (_id, entry) => formatDuration(sumDurations(entry.timeEntry)) + '\t',
  'Logged Roundup': (_id, entry) => formatDuration(durationRoundUpByHalfHour(sumDurations(entry.timeEntry))) + '\t',
  Estimate: (_id, entry) => formatDuration(entry.task?.time_estimate / 1000) + '\t',
  'L.Assignee seconds': (_id, entry) => getMainGroupOfDurations(entry.timeEntry) + '\t',
  'Estimate seconds': (_id, entry) => (entry.task?.time_estimate ?? 0) / 1000 + '\t',
  'First Log Date': (_id, entry) =>
    entry.timeEntry?.length ? entry.timeEntry[0]?.timeInterval?.start + '\t' : '' + '\t',
  'Last Log Date': (_id, entry) =>
    entry.timeEntry?.length ? entry.timeEntry[entry.timeEntry.length - 1]?.timeInterval?.end + '\t' : '' + '\t',
  Status: (_id, entry) => (entry.task ? entry.task.status.status + '\t' : '' + '\t'),
  Tags: (_id, entry) => {
    if (entry.task) {
      let value = ''
      entry.task.tags.forEach((tag) => {
        value += tag.name + ' '
      })
      return (value += '\t')
    } else {
      return '\t'
    }
  },
  Assignees: (_id, entry) => formatUserNamesSortedByParticipation(entry.timeEntry) + '\t',
  'Days in Review': (_id, entry) =>
    formatDurationWithDays(getTaskTimeStatus(entry.task?.timeStatus, 'to review')) + '\t',
  'Days in Test': (_id, entry) => formatDurationWithDays(getTaskTimeStatus(entry.task?.timeStatus, 'to test')) + '\t',
}

export const formatDuration = (duration: number) => {
  if (!duration) {
    return '--'
  }
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration - hours * 3600) / 60)
  const seconds = duration - hours * 3600 - minutes * 60

  let output = ''
  if (hours > 0) {
    output += `${hours}h `
  }
  if (minutes > 0) {
    output += `${minutes}m `
  }
  if (seconds > 0) {
    output += `${seconds}s`
  }
  return output.trim()
}

export const formatDurationWithDays = (duration: number) => {
  if (!duration) {
    return '--'
  }
  const durationInSeconds = Math.floor(duration / 1000)
  const days = Math.floor(durationInSeconds / 86400)
  const hours = Math.floor((durationInSeconds - days * 86400) / 3600)
  const minutes = Math.floor((durationInSeconds - days * 86400 - hours * 3600) / 60)
  const seconds = Math.floor(durationInSeconds - days * 86400 - hours * 3600 - minutes * 60)

  let output = ''
  if (days > 0) {
    output += `${days}d `
  }
  if (hours > 0) {
    output += `${hours}h `
  }
  if (minutes > 0) {
    output += `${minutes}m `
  }
  if (seconds > 0) {
    output += `${seconds}s`
  }

  return output.trim()
}
