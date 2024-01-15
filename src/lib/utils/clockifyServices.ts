import { ClockifyTimeEntriesDocument, type ClockifyTimeEntry } from '../../graphql/generated'
import { formatDurationClock, type Entry, type Report, formatDayMonthYear } from '$lib/utils/format'
import { getGraphqlClient } from '$lib/utils/store'
import { parse, toSeconds } from 'iso8601-duration'
import { getLastEstimative } from '$lib/utils/clickupServices'

function sortUserDurations(entries: ClockifyTimeEntry[]): { user: string; duration: number; email: string }[] {
  const users = entries.map((item) => item.clockifyUser.name)
  const uniqueUsers = [...new Set(users)]
  const userDurations = uniqueUsers.map((user) => {
    const userEntries = entries.filter((item) => item.clockifyUser.name === user)
    return {
      user,
      duration: sumDurations(userEntries),
      email: userEntries[0].user?.email ?? '',
    }
  })
  return userDurations.sort((a, b) => b.duration - a.duration)
}

export function sumDurations(entries: ClockifyTimeEntry[]) {
  return entries
    .map((item) => {
      return item.duration ? toSeconds(parse(item.duration)) : 0
    })
    .reduce((a, b) => a + b, 0)
}

/**
 * This method will return a string with the names of the users sorted by the sum of durations of their entries
 * @param entries
 */
export function formatUserNamesSortedByParticipation(entries: ClockifyTimeEntry[] | null): string {
  if (!entries) return ''
  const sortedUserDurations = sortUserNameAndEmailByParticipation(entries)
  return sortedUserDurations.map((item) => item.name).join(', ')
}

export function sortUserNameAndEmailByParticipation(
  entries: ClockifyTimeEntry[] | null,
): { name: string; email: string }[] {
  if (!entries) return []
  const sortedUserDurations = sortUserDurations(entries)
  return sortedUserDurations.map((item) => ({ name: item.user, email: item.email }))
}

export function formatUserNamesDailyParticipation(entries: ClockifyTimeEntry[] | null, date: string) {
  if (!entries) return []
  const filteredEntriesByDay = entries.filter((item) => formatDayMonthYear(item.start) === date)
  const users = [...new Set(filteredEntriesByDay.map((item) => item.clockifyUser.name))]
  return users
}

export function getUserParticipation(entries: ClockifyTimeEntry[] | null, username: string): string {
  if (!entries) return ''
  const userEntries = entries.filter((item) => item.clockifyUser.name === username.trim())
  return formatDurationClock(sumDurations(userEntries))
}

export function getMainGroupOfDurations(entries: ClockifyTimeEntry[]): number {
  if (!entries) return 0
  const sortedUserDurations = sortUserDurations(entries)
  return sortedUserDurations[0]?.duration ?? 0
}

export const clockifyUrl = (dateRangeStart: Date, dateRangeEnd: Date, description: string): string => {
  return `https://app.clockify.me/reports/detailed?start=${dateRangeStart.toISOString()}&end=${dateRangeEnd.toISOString()}&description=${encodeURI(
    description,
  )}&page=1&pageSize=1000`
}

export const calculateEstimationError = (entry: Entry): number => {
  const estimation = (getLastEstimative(entry.task?.timeEstimates)?.estimate ?? 0) / 1000
  return estimation ? Number((getMainGroupOfDurations(entry.timeEntry) / estimation).toFixed(2)) : 0
}

export const countUserNames = (report: Report | null): number => {
  return [
    ...new Set(
      Object.values(report)
        .map((item: Entry) => formatUserNamesSortedByParticipation(item.timeEntry).split(', '))
        .flat(),
    ),
  ].length
}

export const sumTimeTracked = (report: Report) => {
  return Object.values(report)
    .map((item: Entry) => sumDurations(item.timeEntry))
    .reduce((a, b) => a + b, 0)
}

export async function getClockifyEntriesAPI(startDate: string, endDate: string): Promise<ClockifyTimeEntry[]> {
  const result = await getGraphqlClient()
    .query(ClockifyTimeEntriesDocument, {
      where: {
        OR: [
          {
            start: { gte: startDate },
            end: { lte: endDate },
          },
          {
            start: { gte: startDate },
            end: null,
          },
        ],
      },
    })
    .toPromise()

  return result.data.clockifyTimeEntries as ClockifyTimeEntry[]
}

export const getLastTimeEntry = (entry: Entry) => {
  const endDate = (timeEntry: ClockifyTimeEntry) => (timeEntry.end ? new Date(timeEntry.end) : new Date())

  return entry.timeEntry.reduce((current, next) => {
    return endDate(next) > endDate(current) ? next : current
  }, entry.timeEntry[0])
}

export function getLastTimeEntryPerUser(entries: ClockifyTimeEntry[] | null): ClockifyTimeEntry[] {
  if (!entries) return []

  const endDateOrCurrentDate = (timeEntry: ClockifyTimeEntry) => (timeEntry.end ? new Date(timeEntry.end) : new Date())

  const userEntries = entries.reduce((current: ClockifyTimeEntry[], next: ClockifyTimeEntry) => {
    const index = current.findIndex((el) => el.clockifyUser.name === next.clockifyUser.name)
    if (index === -1) {
      current.push(next)
    } else {
      if (endDateOrCurrentDate(next) > endDateOrCurrentDate(current[index])) {
        current[index] = next
      }
    }
    return current
  }, [])
  return userEntries
}

/**
 * If the time entry is running, it doesn't have a end date yet
 * So it shows the current date
 */
export const getLastLogDate = (timeEntry: ClockifyTimeEntry) => {
  return timeEntry.end || new Date().toDateString()
}

export const getUniqueUsersAndEmails = (report: Report) => {
  if (!report) return
  const usersAndEmail = Object.values(report).flatMap((entry) =>
    entry.timeEntry.map((timeEntry) => ({ name: timeEntry.clockifyUser.name, email: timeEntry.user.email })),
  )
  const uniqueUsersAndEmail = Object.values(
    usersAndEmail.reduce((acc, userAndEmail) => ({ ...acc, [userAndEmail.email]: userAndEmail }), {}),
  )
  return uniqueUsersAndEmail
}
