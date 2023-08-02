import axios from './axiosConfig'
import { formatDurationClock, type Entry, type Report, type SelectedValue } from './format'

const CLOCKIFY_REPORTS_API_URL = 'https://reports.api.clockify.me/v1'

export interface TimeEntryReportDetailedParams {
  projectId: string | undefined
  dateRangeStart: string
  dateRangeEnd: string
  userId: string | undefined

  detailedFilter: {
    page: number
    pageSize: number | undefined
    sortColumn: string | undefined
  }
}

export interface TimeEntryReportDetailed {
  timeentries: TimeEntryReportDetailedTimeEntry[]
  totals: { totalTime: number; entriesCount: number }[]
}

export interface TimeEntryReportDetailedTimeEntry {
  _id: string
  description: string
  userId: string
  timeInterval: {
    start: string
    end: string
    duration: number
  }
  projectId: string
  projectName: string
  projectColor: string
  userName: string
  userEmail: string
}

export async function getTimeEntryReportDetailed(
  params: { dateRangeEnd: string; detailedFilter: { pageSize: number; page: number }; dateRangeStart: string },
  config: { clockifyApiKey: string; clockifyWorkspaceId: string },
): Promise<TimeEntryReportDetailed> {
  const url = `${CLOCKIFY_REPORTS_API_URL}/workspaces/${config.clockifyWorkspaceId}/reports/detailed`
  const { data } = await axios.post<TimeEntryReportDetailed>(url, params, {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': config.clockifyApiKey,
    },
  })
  return data as TimeEntryReportDetailed
}

function sortUserDurations(entries: TimeEntryReportDetailedTimeEntry[]) {
  const users = entries.map((item) => item.userName)
  const uniqueUsers = [...new Set(users)]
  const userDurations = uniqueUsers.map((user) => {
    const userEntries = entries.filter((item) => item.userName === user)
    return {
      user,
      duration: sumDurations(userEntries),
    }
  })
  return userDurations.sort((a, b) => b.duration - a.duration)
}

export function sumDurations(entries: TimeEntryReportDetailedTimeEntry[], usernames?: SelectedValue[]) {
  const usernameList = usernames?.map((username: SelectedValue) => username.value)
  const filteredEntriesByUsername = usernames ? entries.filter((item) => usernameList.includes(item.userName)) : entries
  return filteredEntriesByUsername.map((item) => item.timeInterval.duration).reduce((a, b) => a + b, 0)
}

/**
 * This method will return a string with the names of the users sorted by the sum of durations of their entries
 * @param entries
 */
export function formatUserNamesSortedByParticipation(entries: TimeEntryReportDetailedTimeEntry[] | null) {
  if (!entries) return ''
  const sortedUserDurations = sortUserDurations(entries)
  return sortedUserDurations.map((item) => item.user).join(', ')
}

export function getMainGroupOfDurations(entries: TimeEntryReportDetailedTimeEntry[]) {
  if (!entries) return 0
  const sortedUserDurations = sortUserDurations(entries)
  return sortedUserDurations[0]?.duration ?? 0
}

export const clockifyUrl = (dateRangeStart: Date, dateRangeEnd: Date, description: string) => {
  return `https://app.clockify.me/reports/detailed?start=${dateRangeStart.toISOString()}&end=${dateRangeEnd.toISOString()}&description=${encodeURI(
    description,
  )}&page=1&pageSize=1000`
}

export const calculateEstimationError = (entry: Entry) => {
  const estimation = (entry.task?.time_estimate ?? 0) / 1000
  return estimation ? Number((getMainGroupOfDurations(entry.timeEntry) / estimation).toFixed(2)) : 0
}

export const countUserNames = (report: Report | null) => {
  return [
    ...new Set(
      Object.values(report)
        .map((item: Entry) => formatUserNamesSortedByParticipation(item.timeEntry).split(', '))
        .flat(),
    ),
  ].length
}

export const sumTimeTracked = (report: Report, selectedAssignee: SelectedValue[]) => {
  return formatDurationClock(
    Object.values(report)
      .map((item: Entry) => sumDurations(item.timeEntry, selectedAssignee))
      .reduce((a, b) => a + b, 0),
  )
}
