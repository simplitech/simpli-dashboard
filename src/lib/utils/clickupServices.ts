import { calculateEstimationError } from '$lib/utils/clockifyServices'
import { type Entry, type Report, formatDurationOnlyDays, formatDurationToDays } from '$lib/utils/format'
import type {
  ClickupTask,
  ClickupTaskDueDate,
  ClickupTaskStatusOnTask,
  ClickupTaskTimeEstimate,
} from '../../graphql/generated'

export enum Error {
  ACCESS_078 = 'ACCESS_078',
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

export function getTaskTimeStatus(taskStatus: ClickupTaskStatusOnTask[] | null, statusName: string): number {
  const status = taskStatus?.filter((item: ClickupTaskStatusOnTask) => item.statusName.trim() === statusName.trim())

  if (taskStatus && status.length) {
    return Math.abs(Date.now() - new Date(getLastStatus(status).createdAt).getTime())
  }
  return 0
}

export const sumTimeEstimate = (report: Report): number => {
  return (
    Object.values(report)
      .map((item: Entry) => item.task?.timeEstimates[0]?.estimate || 0)
      .reduce((a, b) => a + b, 0) / 1000
  )
}

export const avgEstimativeError = (report: Report): number => {
  const tasksWithEstimation = Object.values(report).filter((item) => item.task?.timeEstimates[0]?.estimate != null)
  return (
    tasksWithEstimation.map((item) => calculateEstimationError(item)).reduce((a, b) => a + b, 0) /
      tasksWithEstimation.length || 0
  )
}

export const avgDaysStatus = (report: Report, statusName: string): string => {
  const tasksWithStatus = Object.values(report).filter((item) =>
    item.task?.status.some(
      (clickupStatus: ClickupTaskStatusOnTask) => clickupStatus.statusName.trim() === statusName.trim(),
    ),
  )

  return formatDurationOnlyDays(
    tasksWithStatus.map((item) => getTaskTimeStatus(item.task?.status, statusName)).reduce((a, b) => a + b, 0) /
      tasksWithStatus.length,
  )
}

export const getLastStatus = (clickupTasksStatus: ClickupTaskStatusOnTask[]): ClickupTaskStatusOnTask => {
  if (!clickupTasksStatus) return null
  return clickupTasksStatus.reduce((current, next) => {
    return new Date(next.createdAt) > new Date(current.createdAt) ? next : current
  }, clickupTasksStatus[0])
}

export const getLastEstimative = (clickupTasksTimeEstimate: ClickupTaskTimeEstimate[]): ClickupTaskTimeEstimate => {
  if (!clickupTasksTimeEstimate) return null

  return clickupTasksTimeEstimate.reduce((current, next) => {
    return new Date(next.createdAt) > new Date(current.createdAt) ? next : current
  }, clickupTasksTimeEstimate[0])
}

export const getLastDueDate = (clickupTasksDueDate: ClickupTaskDueDate[]): ClickupTaskDueDate => {
  if (!clickupTasksDueDate) return null

  return clickupTasksDueDate.reduce((current, next) => {
    return new Date(next.createdAt) > new Date(current.createdAt) ? next : current
  }, clickupTasksDueDate[0])
}

export const calculateDelay = (task: ClickupTask): number => {
  if (!task || !task.dueDates.length) return 0

  const currentStatus = getLastStatus(task.status)
  const dueDate = getLastDueDate(task.dueDates).dueDate

  if (!currentStatus || !dueDate) return 0

  if (currentStatus.statusName.trim() === 'to do' || currentStatus.statusName.trim() === 'in progress') {
    const now = Date.now()
    const delay = now - dueDate

    return dueDate > now ? 0 : formatDurationToDays(delay)
  }

  // ordenar o histórico pelo status mais antigo -> mais atual
  const allStatus = task.status.sort((a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())

  // pega a ultima vez que o status foi pra to do
  const todoStatus = allStatus.findLastIndex((item) => item.statusName.trim() === 'to do')

  if (todoStatus >= 0 && todoStatus < allStatus.length - 2) {
    // o próximo valor da lista é o status para que a task foi
    const nextStatusCreationDate = allStatus[todoStatus + 1].createdAt
    return formatDurationToDays(new Date(nextStatusCreationDate).valueOf() - dueDate)
  }

  return 0
}

export function getTaskName(entry: Entry): string {
  return (entry.task?.name ?? entry.timeEntry[0].description) as string
}
