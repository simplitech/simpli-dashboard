import axios from 'axios'

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
  totals: { totalTime: number }[]
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

export function sumDurations(entries: TimeEntryReportDetailedTimeEntry[]) {
  return entries.map((item) => item.timeInterval.duration).reduce((a, b) => a + b, 0)
}

/**
 * This method will return a string with the names of the users sorted by the sum of durations of their entries
 * @param entries
 */
export function formatUserNamesSortedByParticipation(entries: TimeEntryReportDetailedTimeEntry[] | null) {
  if (!entries) return ''
  const users = entries.map((item) => item.userName)
  const uniqueUsers = [...new Set(users)]
  const userDurations = uniqueUsers.map((user) => {
    const userEntries = entries.filter((item) => item.userName === user)
    return {
      user,
      duration: sumDurations(userEntries),
    }
  })
  const sortedUserDurations = userDurations.sort((a, b) => b.duration - a.duration)
  return sortedUserDurations.map((item) => item.user).join(', ')
}
