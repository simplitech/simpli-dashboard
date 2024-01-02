import {
  avgDaysStatus,
  avgEstimativeError,
  calculateDelay,
  getLastDueDate,
  getLastEstimative,
  getTaskTimeStatus,
  sumTimeEstimate,
} from './clickupServices'
import { calculateEstimationError, getLastTimeEntry, sumDurations, sumTimeTracked } from './clockifyServices'
import type { Group, Report } from './format'
import { dateStringToDate } from './helper'

export type OrderBy = {
  asc: boolean
  by: string
}

export const orderByColumns: Record<string, (reportFiltered: Report, asc: boolean) => Report> = {
  'TIME ESTIMATE': (reportFiltered, asc) => orderByTimeEstimate(reportFiltered, asc),
  'TIME TRACKED': (reportFiltered, asc) => orderByTimeTracked(reportFiltered, asc),
  'DUE DATE': (reportFiltered, asc) => orderByDueDate(reportFiltered, asc),
  'LAST LOG': (reportFiltered, asc) => orderByLastLog(reportFiltered, asc),
  'ESTIMATIVE ERROR': (reportFiltered, asc) => orderByEstimateError(reportFiltered, asc),
  DELAY: (reportFiltered, asc) => orderByDelay(reportFiltered, asc),
  'TO REVIEW': (reportFiltered, asc) => orderByStatusName(reportFiltered, asc, 'to review'),
  'TO TEST': (reportFiltered, asc) => orderByStatusName(reportFiltered, asc, 'to test'),
}

export const orderBySummary: Record<string, (group: Group, asc: boolean) => Group> = {
  'TIME ESTIMATE': (group, asc) => orderByTimeEstimateSum(group, asc),
  'TIME TRACKED': (group, asc) => orderByTimeTrackedSum(group, asc),
  'ESTIMATIVE ERROR': (group, asc) => orderByEstimateErrorSum(group, asc),
  'LAST LOG': (group, asc) => orderByLastLogSum(group, asc),
  'TO REVIEW': (group, asc) => orderByStatusNameAvg(group, asc, 'to review'),
  'TO TEST': (group, asc) => orderByStatusNameAvg(group, asc, 'to test'),
}

const calculateDiff = (a: number, b: number, asc: boolean) => {
  return asc ? a - b : b - a
}

const orderByDelay = (reportFiltered: Report, asc: boolean) => {
  const entries = Object.entries(reportFiltered)

  entries.sort((a, b) =>
    calculateDiff(calculateDelay(a[1].task) || Infinity, calculateDelay(b[1].task) || Infinity, asc),
  )

  return Object.fromEntries(entries)
}

const orderByStatusName = (reportFiltered: Report, asc: boolean, statusName: string) => {
  const entries = Object.entries(reportFiltered)

  entries.sort((a, b) =>
    calculateDiff(
      getTaskTimeStatus(a[1].task?.status, statusName),
      getTaskTimeStatus(b[1].task?.status, statusName),
      asc,
    ),
  )

  return Object.fromEntries(entries)
}

const orderByTimeEstimate = (reportFiltered: Report, asc: boolean) => {
  const entries = Object.entries(reportFiltered)

  entries.sort((a, b) =>
    calculateDiff(
      getLastEstimative(a[1].task?.timeEstimates)?.estimate || 0,
      getLastEstimative(b[1].task?.timeEstimates)?.estimate || 0,
      asc,
    ),
  )

  return Object.fromEntries(entries)
}

const orderByDueDate = (reportFiltered: Report, asc: boolean) => {
  const entries = Object.entries(reportFiltered)
  entries.sort((a, b) =>
    calculateDiff(
      getLastDueDate(b[1].task?.dueDates)?.dueDate || 0,
      getLastDueDate(a[1].task?.dueDates)?.dueDate || 0,
      asc,
    ),
  )
  return Object.fromEntries(entries)
}

const orderByLastLog = (reportFiltered: Report, asc: boolean) => {
  const entries = Object.entries(reportFiltered)
  entries.sort((a, b) => {
    const lastLogA = getLastTimeEntry(a[1]).end ? new Date(getLastTimeEntry(a[1]).end).valueOf() : new Date().valueOf()
    const lastLogB = getLastTimeEntry(b[1]).end ? new Date(getLastTimeEntry(b[1]).end).valueOf() : new Date().valueOf()
    return calculateDiff(lastLogA, lastLogB, asc)
  })
  return Object.fromEntries(entries)
}

const orderByTimeTracked = (reportFiltered: Report, asc: boolean) => {
  const entries = Object.entries(reportFiltered)
  entries.sort((a, b) => calculateDiff(sumDurations(a[1].timeEntry), sumDurations(b[1].timeEntry), asc))
  return Object.fromEntries(entries)
}

const orderByEstimateError = (reportFiltered: Report, asc: boolean) => {
  const entries = Object.entries(reportFiltered)
  entries.sort((a, b) => calculateDiff(calculateEstimationError(b[1]), calculateEstimationError(a[1]), asc))
  return Object.fromEntries(entries)
}

const orderByTimeTrackedSum = (group: Group, asc: boolean) => {
  const entries = Object.entries(group)
  entries.sort((a, b) => calculateDiff(sumTimeTracked(a[1] as Report), sumTimeTracked(b[1] as Report), asc))
  return Object.fromEntries(entries)
}

const orderByTimeEstimateSum = (group: Group, asc: boolean) => {
  const entries = Object.entries(group)
  entries.sort((a, b) => calculateDiff(sumTimeEstimate(a[1] as Report), sumTimeEstimate(b[1] as Report), asc))
  return Object.fromEntries(entries)
}

const orderByEstimateErrorSum = (group: Group, asc: boolean) => {
  const entries = Object.entries(group)
  entries.sort((a, b) => calculateDiff(avgEstimativeError(b[1] as Report), avgEstimativeError(a[1] as Report), asc))
  return Object.fromEntries(entries)
}

const orderByLastLogSum = (group: Group, asc: boolean) => {
  const entries = Object.entries(group)
  entries.sort((a, b) => {
    return calculateDiff(dateStringToDate(b[0]).valueOf(), dateStringToDate(a[0]).valueOf(), asc)
  })
  return Object.fromEntries(entries)
}

const orderByStatusNameAvg = (group: Group, asc: boolean, statusName: string) => {
  const entries = Object.entries(group)
  entries.sort((a, b) =>
    calculateDiff(avgDaysStatus(b[1] as Report, statusName), avgDaysStatus(a[1] as Report, statusName), asc),
  )
  return Object.fromEntries(entries)
}
