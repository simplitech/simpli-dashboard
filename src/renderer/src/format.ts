import {
  formatUserNamesSortedByParticipation,
  sumDurations,
  getMainGroupOfDurations,
  clockifyUrl,
  type TimeEntryReportDetailedTimeEntry,
} from './clockifyServices'
import { durationRoundUpByHalfHour } from './helper'
import { getTaskTimeStatus, type Task, type TimeEntry } from './clickupServices'

export type Entry = {
  task: Task
  taskError?: string
  clickUpTimeEntry: TimeEntry[]
  timeEntry: TimeEntryReportDetailedTimeEntry[]
}

export const formatReport: Record<
  string,
  (id: string, entry: Entry, dateRangeStart: Date, dateRangeEnd: Date) => string
> = {
  'Task ID': (id, entry) => (entry.task ? id : 'Flex'),
  'ClickUp URL': (_id, entry) => (entry.task ? entry.task.url : ''),
  Description: (id, entry) => entry.task?.name ?? id,
  Project: (_id, entry) => entry.task?.list.name ?? entry.timeEntry?.[0]?.projectName ?? 'No project',
  'Clockify URL': (id, entry, dateRangeStart, dateRangeEnd) =>
    entry.timeEntry?.length ? clockifyUrl(dateRangeStart, dateRangeEnd, id) : '',
  Logged: (_id, entry) => formatDuration(sumDurations(entry.timeEntry)),
  'Logged Roundup': (_id, entry) => formatDuration(durationRoundUpByHalfHour(sumDurations(entry.timeEntry))),
  Estimate: (_id, entry) => formatDuration(entry.task?.time_estimate / 1000),
  'L.Assignee seconds': (_id, entry) => String(getMainGroupOfDurations(entry.timeEntry)),
  'Estimate seconds': (_id, entry) => String((entry.task?.time_estimate ?? 0) / 1000),
  'First Log Date': (_id, entry) => (entry.timeEntry?.length ? entry.timeEntry[0]?.timeInterval?.start : ''),
  'Last Log Date': (_id, entry) =>
    entry.timeEntry?.length ? entry.timeEntry[entry.timeEntry.length - 1]?.timeInterval?.end : '',
  Status: (_id, entry) => (entry.task ? entry.task.status.status : ''),
  Tags: (_id, entry) => {
    if (entry.task) {
      let value = ''
      entry.task.tags.forEach((tag, index) => {
        if (entry.task.tags.length - 1 !== index) {
          value += tag.name + ', '
        } else {
          value += tag.name
        }
      })
      return value
    }
    return ''
  },
  Assignees: (_id, entry) => formatUserNamesSortedByParticipation(entry.timeEntry),
  'Days in Review': (_id, entry) => formatDurationWithDays(getTaskTimeStatus(entry.task?.timeStatus, 'to review')),
  'Days in Test': (_id, entry) => formatDurationWithDays(getTaskTimeStatus(entry.task?.timeStatus, 'to test')),
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
