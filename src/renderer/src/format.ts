import {
  formatUserNamesSortedByParticipation,
  sumDurations,
  getMainGroupOfDurations,
  clockifyUrl,
  type TimeEntryReportDetailedTimeEntry,
  calculateEstimationError,
} from './clockifyServices'
import { durationRoundUpByHalfHour } from './helper'
import { getTaskTimeStatus, type Task } from './clickupServices'

export type Entry = {
  task: Task
  taskError?: string
  timeEntry: TimeEntryReportDetailedTimeEntry[]
}

export type Report = {
  [id: string]: Entry
}

export type Filters = {
  [name: string]: FilterOptions[]
}

export type SelectedValue = {
  value: string
  index: number
  label: string
}

export type Group = {
  [key: string]: Group | Report
}

export type FilterOptions = {
  label: string
  color?: string
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
  'Time Tracked': (_id, entry) => formatDuration(sumDurations(entry.timeEntry)),
  'Time Tracked Decimals': (_id, entry) => formatHourDecimals(sumDurations(entry.timeEntry)),
  'Time Tracked Roundup': (_id, entry) => formatDuration(durationRoundUpByHalfHour(sumDurations(entry.timeEntry))),
  'Time Tracked Roundup Decimals': (_id, entry) =>
    formatHourDecimals(durationRoundUpByHalfHour(sumDurations(entry.timeEntry))),
  'Time Estimate': (_id, entry) => formatDuration(entry.task?.time_estimate / 1000),
  'Time Estimate Decimals': (_id, entry) => formatHourDecimals(entry.task?.time_estimate / 1000),
  'Time Tracked by Assignee': (_id, entry) => formatHourDecimals(getMainGroupOfDurations(entry.timeEntry)),
  'Estimative error': (_id, entry) => String(calculateEstimationError(entry)),
  'First Log': (_id, entry) =>
    entry.timeEntry?.length ? entry.timeEntry[entry.timeEntry.length - 1]?.timeInterval?.start : '',
  'Last Log': (_id, entry) => (entry.timeEntry?.length ? entry.timeEntry[0]?.timeInterval?.end : ''),
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

export const formatDuration = (duration: number): string => {
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

export const formatDurationClock = (duration: number): string => {
  if (!duration) {
    return '--'
  }
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration - hours * 3600) / 60)
  const seconds = duration - hours * 3600 - minutes * 60

  return `${hours.toLocaleString('en-US', { minimumIntegerDigits: 2 })}:${minutes.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  })}:${seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`
}

export const formatDurationWithDays = (duration: number): string => {
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

export const formatDurationOnlyDays = (duration: number): string => {
  if (!duration) {
    return '--'
  }
  const durationInSeconds = Math.floor(duration / 1000)
  const days = Math.floor(durationInSeconds / 86400)
  return `${days}d`
}

export const formatDateDayMonth = (date: string | Date): string => {
  return `${new Date(date).getDate()} ${new Date(date).toLocaleString('en', { month: 'short' })}`
}

export const formatUnixDate = (unixDate: string | number): string => {
  return formatDateDayMonth(new Date(Number(unixDate)))
}

export const getUserInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
}

export const formatDayMonthYear = (date: string) => {
  return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
}

export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function formatHourDecimals(duration: number) {
  if (!duration) return '--'

  return (duration / 3600).toFixed(2)
}
