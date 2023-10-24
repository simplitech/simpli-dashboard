import { gql } from '@urql/svelte'

export const queries = gql`
  query clockifyTimeEntries($where: ClockifyTimeEntryWhereInput) {
    clockifyTimeEntries(where: $where) {
      id
      description
      start
      end
      duration
      currentlyRunning
      tags {
        name
      }
      clockifyProject {
        name
        color
      }
      clockifyUser {
        name
      }
      user {
        username
        githubId
      }
      clickupTask {
        id
        name
        description
        url
        assignees {
          clickupUser {
            id
            email
            username
          }
        }
        listLocation {
          name
        }
        tags {
          name
          tagBg
          tagFg
        }
        timeEstimates {
          createdAt
          updatedAt
          estimate
        }
        dueDates {
          createdAt
          updatedAt
          dueDate
        }
        status {
          createdAt
          updatedAt
          status
        }
      }
    }
  }
`
