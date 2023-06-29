import axios from 'axios'

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
  return /(?:^|\s)(?:CU-|#)?([a-zA-Z]*\d[a-zA-Z\d]*)(?=\s|$)/g.exec(text)?.[1]
}

export function getTaskTimeStatus(taskStatus: TaskStatus | null, statusName: string): number {
  const status = taskStatus?.status_history.find((item) => item.status.trim() === statusName.trim())
  if (taskStatus && status) {
    return Math.abs(Date.now() - status.total_time.since)
  }
  return 0
}
