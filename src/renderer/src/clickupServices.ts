import axios from './axiosConfig'
import { calculateEstimationError } from './clockifyServices'
import { formatDuration, type Entry, type Report, formatDurationOnlyDays } from './format'

const CLICKUP_API_URL = 'https://api.clickup.com/api/v2'

export interface Task {
  id: string
  name: string
  description: string
  status: { id: string; status: string; color: string; orderIndex: number }
  date_created: string | null
  date_updated: string | null
  date_closed: string | null
  date_done: string | null
  archived: boolean
  creator: User
  assignees: User[]
  watchers: User[]
  tags: { name: string; tag_fg: string; tag_bg: string; creator: number }[]
  priority: { id: string; priority: string; color: string; orderindex: string }
  due_date: string | null
  start_date: string | null
  time_estimate: number | null
  time_spent: number | null
  url: string
  list: { id: string; name: string }
  custom_fields: { id: string; name: string; type: string; value: Field | Field[] }[]
  timeStatus: TaskStatus
}

export interface TaskTotalTime {
  by_minute: number
  since: number
}

export interface TaskTimeStatus {
  color: string
  orderindex: number | undefined
  status: string
  total_time: TaskTotalTime
}
export interface TaskStatus {
  current_status: TaskTimeStatus
  status_history: TaskTimeStatus[]
}

export interface User {
  id: number
  username: string
  email: string
  profilePicture: string
  color: string
  initials: string | undefined
}

export type Field =
  | {
      id: string
      name: string
    }
  | string
  | number
  | boolean
  | null

export interface BulkTimeStatus {
  [name: string]: TaskStatus
}

export async function getTask(taskId: string, config: { clickupApiKey: string }): Promise<Task> {
  const url = `${CLICKUP_API_URL}/task/${taskId}`
  const { data } = await axios.get<Task>(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: config.clickupApiKey,
    },
  })
  return data as Task
}

export async function getTaskListTime(taskIds: string[], config: { clickupApiKey: string }): Promise<BulkTimeStatus> {
  const format = taskIds
    .map((value) => {
      return `task_ids=${value}`
    })
    .join('&')

  const url = `${CLICKUP_API_URL}/task/bulk_time_in_status/task_ids?${format}`

  const { data } = await axios.get<BulkTimeStatus>(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: config.clickupApiKey,
    },
  })

  return data as BulkTimeStatus
}

export function clickupIdFromText(text: string): string | undefined {
  const regexCU = /CU-([a-z]+|\d+)+\b/g
  const matchesCU = text.match(regexCU)

  if (matchesCU && matchesCU.length > 0) {
    return matchesCU[0].replace('CU-', '')
  }

  const regexSharp = /#([a-z]+|\d+)+\b/g
  const matchesSharp = text.match(regexSharp)

  if (matchesSharp && matchesSharp.length > 0) {
    return matchesSharp[0].replace('#', '')
  }

  let textRefined = text
  let matchesPure
  let attempts = 0
  do {
    const regexPure = /\b([a-z]+|\d+){7,}\b/g
    matchesPure = textRefined.match(regexPure)
    if (matchesPure && matchesPure.length) {
      const foundMatch = matchesPure[0].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/g)
      if (foundMatch) {
        return foundMatch[0]
      }

      textRefined = textRefined.replace(matchesPure[0], '')
    }
    attempts++
  } while (matchesPure && attempts < 4)

  return undefined
}

export function getTaskTimeStatus(taskStatus: TaskStatus | null, statusName: string): number {
  const status = taskStatus?.status_history.find((item) => item.status.trim() === statusName.trim())
  if (taskStatus && status) {
    return Math.abs(Date.now() - status.total_time.since)
  }
  return 0
}

export const sumTimeEstimate = (report: Report) => {
  return formatDuration(
    Object.values(report)
      .map((item: Entry) => item.task?.time_estimate || 0)
      .reduce((a, b) => a + b, 0) / 1000,
  )
}

export const avgEstimativeError = (report: Report) => {
  const tasksWithEstimation = Object.values(report).filter((item) => item.task?.time_estimate != null)
  return (
    tasksWithEstimation.map((item) => calculateEstimationError(item)).reduce((a, b) => a + b, 0) /
    tasksWithEstimation.length
  ).toFixed(2)
}

export const avgDaysStatus = (report: Report, statusName: string) => {
  const tasksWithStatus = Object.values(report).filter((item) =>
    item.task?.timeStatus?.status_history.find((item) => item.status.trim() === statusName.trim()),
  )
  return formatDurationOnlyDays(
    tasksWithStatus.map((item) => getTaskTimeStatus(item.task?.timeStatus, statusName)).reduce((a, b) => a + b, 0) /
      tasksWithStatus.length,
  )
}
