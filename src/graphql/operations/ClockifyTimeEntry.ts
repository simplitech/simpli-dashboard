import { gql } from '@urql/svelte'

export const queries = gql`
  query clockifyTimeEntries($where: ClockifyTimeEntryWhereInput) {
    clockifyTimeEntries(where: $where) {
      clockifyId
      description
      tags {
        name
      }
      type
      clockifyProject {
        name
        color
      }
      user {
        id
        name
      }
      timeInterval {
        start
        end
        duration
      }
      clickupTask {
        id
        clickupId
        name
        description
        url
        assignees {
          color
          email
          id
          profilePicture
          username
          initials
        }
        list {
          name
        }
        tags {
          name
          tagBg
          tagFg
        }
        clickupTasksTimeEstimates {
          createdAt
          updatedAt
          estimate
        }
        clickupTasksDueDates {
          createdAt
          updatedAt
          dueDate
        }
        clickupTasksStatus {
          id
          createdAt
          updatedAt
          status {
            color
            status
          }
        }
      }
    }
  }
`
