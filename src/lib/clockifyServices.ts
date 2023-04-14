import { PUBLIC_CLOCKIFY_API_KEY, PUBLIC_CLOCKIFY_WORKSPACE_ID } from '$env/static/public'
import axios from 'axios'

const CLOCKIFY_REPORTS_API_URL = 'https://reports.api.clockify.me/v1'

const CLOCKIFY_AXIOS_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': PUBLIC_CLOCKIFY_API_KEY,
  },
}

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
  params: TimeEntryReportDetailedParams,
): Promise<TimeEntryReportDetailed> {
  const url = `${CLOCKIFY_REPORTS_API_URL}/workspaces/${PUBLIC_CLOCKIFY_WORKSPACE_ID}/reports/detailed`
  const { data } = await axios.post<TimeEntryReportDetailed>(url, params, CLOCKIFY_AXIOS_CONFIG)
  return data as TimeEntryReportDetailed
}

export function formatDuration(duration: number | null) {
  if (!duration) {
    return '--'
  }
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration - hours * 3600) / 60)
  const seconds = duration - hours * 3600 - minutes * 60

  return `${hours}h ${minutes}m ${seconds}s`
}

export function sumDurations(entries: TimeEntryReportDetailedTimeEntry[]) {
  return entries.map((item) => item.timeInterval.duration).reduce((a, b) => a + b, 0)
}
