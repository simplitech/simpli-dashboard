import { calculateEstimationError } from '$lib/utils/clockifyServices'
import { formatDuration, type Entry, type Report, formatDurationOnlyDays } from '$lib/utils/format'
import type { ClickupTasksDueDate, ClickupTasksStatus, ClickupTasksTimeEstimate } from '../../graphql/generated'

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

export function getTaskTimeStatus(taskStatus: ClickupTasksStatus[] | null, statusName: string): number {
  const status = taskStatus?.filter((item: ClickupTasksStatus) => item.status.status.trim() === statusName.trim())

  if (taskStatus && status.length) {
    return Math.abs(Date.now() - new Date(getLastStatus(status).createdAt).getTime())
  }
  return 0
}

export const sumTimeEstimate = (report: Report): string => {
  return formatDuration(
    Object.values(report)
      .map((item: Entry) => item.task?.clickupTasksTimeEstimates[0]?.estimate || 0)
      .reduce((a, b) => a + b, 0) / 1000,
  )
}

export const avgEstimativeError = (report: Report): string => {
  const tasksWithEstimation = Object.values(report).filter(
    (item) => item.task?.clickupTasksTimeEstimates[0]?.estimate != null,
  )
  return (
    tasksWithEstimation.map((item) => calculateEstimationError(item)).reduce((a, b) => a + b, 0) /
    tasksWithEstimation.length
  ).toFixed(2)
}

export const avgDaysStatus = (report: Report, statusName: string): string => {
  const tasksWithStatus = Object.values(report).filter((item) =>
    item.task?.clickupTasksStatus.some((item) => item.status.status.trim() === statusName.trim()),
  )

  return formatDurationOnlyDays(
    tasksWithStatus
      .map((item) => getTaskTimeStatus(item.task?.clickupTasksStatus, statusName))
      .reduce((a, b) => a + b, 0) / tasksWithStatus.length,
  )
}

export const getLastStatus = (clickupTasksStatus: ClickupTasksStatus[]): ClickupTasksStatus => {
  if (!clickupTasksStatus) return null
  return clickupTasksStatus.reduce((current, next) => {
    return new Date(next.createdAt) > new Date(current.createdAt) ? next : current
  }, clickupTasksStatus[0])
}

export const getLastEstimative = (clickupTasksTimeEstimate: ClickupTasksTimeEstimate[]): ClickupTasksTimeEstimate => {
  if (!clickupTasksTimeEstimate) return null

  return clickupTasksTimeEstimate.reduce((current, next) => {
    return new Date(next.createdAt) > new Date(current.createdAt) ? next : current
  }, clickupTasksTimeEstimate[0])
}

export const getLastDueDate = (clickupTasksDueDate: ClickupTasksDueDate[]): ClickupTasksDueDate => {
  if (!clickupTasksDueDate) return null

  return clickupTasksDueDate.reduce((current, next) => {
    return new Date(next.createdAt) > new Date(current.createdAt) ? next : current
  }, clickupTasksDueDate[0])
}
