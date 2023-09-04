import { gql } from '@urql/svelte'

export const queries = gql`
  query clockifyTimeEntries($where: ClockifyTimeEntryWhereInput) {
    clockifyTimeEntries(where: $where) {
      id
      clockifyId
      description
      userId
      billable
      costRate
      currentlyRunning
      customFieldValues
      tags {
        name
      }
      type
      workspaceId
      isLocked
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
        textContent
        timeSpent
        archived
        customId
        dateClosed
        dateCreated
        dateDone
        dateUpdated
        startDate
        orderindex
        teamId
        url
        points
        permissionLevel
        creator {
          color
          email
          id
          profilePicture
          username
          initials
        }
        assignees {
          color
          email
          id
          profilePicture
          username
          initials
        }
        checklists {
          creator
          dateCreated
          id
          items {
            id
          }
          name
          orderindex
          resolved
          taskId
          unresolved
        }
        dependencies {
          dateCreated
          dependsOn
          taskId
          type
          userid
          workspaceId
        }
        folder {
          access
          id
          name
          hidden
        }
        space {
          id
        }
        clickupProject {
          access
          id
          name
          hidden
        }
        list {
          access
          id
          name
          hidden
        }
        priority {
          color
          id
          orderindex
          priority
        }
        sharing {
          public
          publicFields
          publicShareExpiresOn
          seoOptimized
          token
        }
        tags {
          creator
          name
          tagBg
          tagFg
        }
        linkedTasks {
          dateCreated
          linkId
          taskId
          userid
          workspaceId
        }
        customFields {
          dateCreated
          hideFromGuests
          id
          name
          required
          type
          typeConfig
          value
        }
        attachments {
          date
          deleted
          emailData
          extension
          hidden
          id
          isFolder
          mimetype
          orientation
          parentId
          resolvedComments
          size
          source
          thumbnailLarge
          thumbnailMedium
          thumbnailSmall
          title
          totalComments
          type
          url
          urlWHost
          urlWQuery
          user {
            color
            email
            id
            profilePicture
            username
            initials
          }
          version
        }
        parent
        watchers
        projectId
        clickupTasksTimeEstimates {
          id
          createdAt
          updatedAt
          clickupTaskId
          estimate
        }
        clickupTasksDueDates {
          id
          createdAt
          updatedAt
          clickupTaskId
          dueDate
        }
        clickupTasksStatus {
          id
          createdAt
          updatedAt
          clickupTaskId
          status {
            color
            id
            orderindex
            status
            type
          }
        }
        project {
          id
          createdAt
          updatedAt
          clickupProjectId
          clockifyProjectId
        }
      }
    }
  }
`
