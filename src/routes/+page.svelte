<script lang="ts">
  import { onMount } from 'svelte'
  import { getToken } from '$lib/utils/cacheServices'
  import {
    calculateEstimationError,
    formatUserNamesSortedByParticipation,
    formatUserNamesDailyParticipation,
    getClockifyEntriesAPI,
    getUniqueUsersAndEmails,
  } from '$lib/utils/clockifyServices'
  import { calculateDelay, clickupIdFromText, getLastStatus, getTaskTimeStatus } from '$lib/utils/clickupServices'
  import Modal from '$lib/components/Modal.svelte'
  import { daysToMilis } from '$lib/utils/helper'
  import Header from '$lib/components/Header.svelte'
  import Toolbar from '$lib/components/Toolbar.svelte'
  import {
    formatDayMonthYear,
    type Entry,
    type FilterItems,
    type Report,
    type Group,
    type FilterOptions,
    type Filters,
  } from '$lib/utils/format'
  import Loading from '$lib/components/Loading.svelte'
  import { scale } from 'svelte/transition'
  import TableRender from '$lib/components/TableRender.svelte'
  import _ from 'lodash'
  import { showToast } from '$lib/utils/toast'
  import { validateAndSignIn, type Login } from '$lib/utils/loginServices'
  import { createClient, graphqlClient, usersOverview } from '$lib/utils/store'
  import type { ClickupTaskStatusOnTask, ClockifyTimeEntry, ClickupTask } from '../graphql/generated'
  import { orderByColumns, type OrderBy, orderBySummary } from '$lib/utils/orderby'
  import type { UserOverview } from '$lib/types/UserOverview'

  let report: Report = null
  let reportFiltered: Report = null
  let loading = false
  let loadingText = ''
  let loadingOrigin = ''

  let filters: FilterItems = {}
  let projectFilter: FilterOptions[] = []
  let statusFilter: FilterOptions[] = []
  let assigneeFilter: FilterOptions[] = []

  let selectedProject: FilterOptions[] = []
  let selectedStatus: FilterOptions[] = []
  let selectedAssignee: FilterOptions[] = []
  let selectedStatusInPeriod: FilterOptions[] = []
  let selectedGroupBy: FilterOptions[] = []
  let searchValue: string | null = null

  let now = new Date()
  let dateRangeStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
  let dateRangeEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

  let reportGroup: Group = {}
  let auxReportGroup: Group = {}

  let loginOpen = false
  let loginData: Login = {
    email: null,
    password: null,
  }

  let orderBy: OrderBy = {
    asc: false,
    by: 'LAST LOG',
  }

  $: showSummary = true
  $: showDetails = true
  $: showWarnings = true

  onMount(async () => {
    const token = await getToken()
    createClient()
    if (!token) {
      loginOpen = true
    } else {
      await generateReport()
    }
  })

  const refreshData = async (event: CustomEvent<{ dateRangeStart: Date; dateRangeEnd: Date }>) => {
    dateRangeStart = event.detail.dateRangeStart
    dateRangeEnd = event.detail.dateRangeEnd

    await generateReport()
  }

  const generateReport = async () => {
    loading = true

    const clockifyEntries = await getClockifyEntries()

    report = clockifyEntries
    reportFiltered = clockifyEntries

    projectFilter = [
      ...new Set(
        Object.values(report).map(
          (item: Entry) => item.task?.listLocation.name ?? item.timeEntry?.[0]?.clockifyProject?.name ?? 'No Project',
        ),
      ),
    ]
      .sort()
      .map((filterItem: string) => ({ label: filterItem }))

    let index = projectFilter.findIndex((item) => item.label === 'No Project')
    projectFilter.unshift(projectFilter[index])
    projectFilter.splice(index + 1, 1)

    const statusMap: { [id: string]: FilterOptions } = {}
    Object.values(report).forEach((item: Entry) => {
      const status = item.task?.status

      status?.forEach((clickupStatus: ClickupTaskStatusOnTask) => {
        const name = clickupStatus.statusName
        if (!statusMap[name]) {
          statusMap[name] = {
            label: name,
            color: clickupStatus.statusColor || '#c2c2c2',
          }
        }
      })
    })
    statusFilter = Object.values(statusMap)

    index = statusFilter.findIndex((item) => item.label === 'No Status')
    statusFilter.unshift(statusFilter[index])
    statusFilter.splice(index + 1, 1)

    assigneeFilter = [
      ...new Set(
        Object.values(report)
          .map((item: Entry) => formatUserNamesSortedByParticipation(item.timeEntry).split(', '))
          .flat(),
      ),
    ]
      .sort()
      .map((filterItem: string) => ({ label: filterItem }))

    filters = {
      project: projectFilter,
      status: statusFilter,
      assignee: assigneeFilter,
    }

    handleFilters()

    buildUserOverview()

    loading = false
  }

  const getClockifyEntries = async (): Promise<Report> => {
    loadingOrigin = 'Clockify...'

    let clockifyData: ClockifyTimeEntry[] = await getClockifyEntriesAPI(
      dateRangeStart.toISOString(),
      dateRangeEnd.toISOString(),
    )
    const resp: Report = {}

    for (const clockifyEntry of clockifyData) {
      let id = clickupIdFromText(clockifyEntry.description)
      /** Eu coloco a description + projeto por conta que podem existir 2
       * tasks flex com o mesmo nome, mas de projetos diferentes (Ex: CR)
       *  e como o id será usado como atributo do resp, então não daria
       *  pra ter vários atributos com mesmo nome. Como toda task tem
       *  pelo menos uma timeEntry, então deve se pegar o nome da issue
       *  por ela.
       */
      id = id || `${clockifyEntry.description} - ${clockifyEntry.clockifyProject?.name}`

      if (!resp[id]) {
        resp[id] = { timeEntry: [], task: clockifyEntry.clickupTask }
      }

      resp[id].timeEntry.push(clockifyEntry)
    }

    return resp
  }

  const setSearch = (event: CustomEvent<{ searchValue: string }>) => {
    searchValue = event.detail.searchValue

    handleFilters()
  }

  const setOrderByValue = (event: CustomEvent<OrderBy>) => {
    orderBy = event.detail
    handleFilters()
  }

  const formatSearchValue = (text: string | undefined) => {
    if (text) return text.toLowerCase().replace(/\s+/g, '')
    return ''
  }

  const setFilterValue = (event: CustomEvent<Filters>) => {
    selectedAssignee = event.detail.selectedAssignee
    selectedProject = event.detail.selectedProject
    selectedStatus = event.detail.selectedStatus
    selectedStatusInPeriod = event.detail.selectedStatusInPeriod
    selectedGroupBy = event.detail.selectedGroupBy
    showWarnings = event.detail.showWarnings
    showDetails = event.detail.showDetails
    showSummary = event.detail.showSummary

    handleFilters()
  }

  function handleFilters() {
    reportFiltered = _.cloneDeep(report)

    if (selectedStatus.length) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedStatus).some(
            (status: FilterOptions) => (getLastStatus(value.task?.status)?.statusName ?? 'No Status') === status.label,
          ),
        ),
      )
    }

    if (selectedProject.length) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedProject).some(
            (project: FilterOptions) =>
              (value.task?.listLocation.name ?? value.timeEntry[0]?.clockifyProject?.name ?? 'No Project') ===
              project.label,
          ),
        ),
      )
    }

    if (selectedAssignee.length) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedAssignee).some((assignee: FilterOptions) =>
            formatUserNamesSortedByParticipation(value.timeEntry)
              .split(', ')
              .some((name: string) => name === assignee.label),
          ),
        ),
      )

      Object.entries(reportFiltered).forEach(([, value]) => {
        value.timeEntry = value.timeEntry.filter((entry: ClockifyTimeEntry) =>
          Object.values(selectedAssignee).some((assignee: FilterOptions) => entry.clockifyUser.name === assignee.label),
        )
      })
    }

    if (selectedStatusInPeriod.length) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter((item) => {
          const task: ClickupTask = item[1].task
          return Object.values(selectedStatusInPeriod).some((timeInStatus: FilterOptions) => {
            if (!task) return false
            return checkIfStatusInRange(dateRangeStart, dateRangeEnd, task?.status, timeInStatus.label)
          })
        }),
      )
    }

    if (searchValue) {
      const searchFormatted = formatSearchValue(searchValue)
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(
          ([key, value]) =>
            formatSearchValue(key).includes(searchFormatted) ||
            formatSearchValue(value.task?.id).includes(searchFormatted) ||
            formatSearchValue(value.task?.name).includes(searchFormatted),
        ),
      )
    }

    if (showWarnings && !showDetails) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(
          ([, value]) =>
            calculateEstimationError(value) > 2.5 ||
            getTaskTimeStatus(value.task?.status, 'to review') >= daysToMilis(3) ||
            getTaskTimeStatus(value.task?.status, 'to test') >= daysToMilis(3) ||
            calculateDelay(value.task) >= 2,
        ),
      )
    }

    if (dateRangeEnd) {
      Object.entries(reportFiltered).forEach(([, value]) => {
        if (value.task && value.task.timeEstimates.length) {
          value.task.timeEstimates = value.task.timeEstimates.filter(
            (estimate) => new Date(estimate.createdAt).valueOf() < dateRangeEnd.valueOf(),
          )
        }
      })
    }

    if (orderBy) {
      reportFiltered = orderByColumns[orderBy.by](reportFiltered, orderBy.asc)
    }

    handleGroupBy()
  }

  const handleGroupBy = () => {
    reportGroup = {}
    auxReportGroup = {}

    if (selectedGroupBy.some((item: FilterOptions) => item.label === 'Date')) {
      for (const [idIssue, entry] of Object.entries(reportFiltered)) {
        const dates = new Set(entry.timeEntry.map((item) => formatDayMonthYear(item.end || new Date().toDateString())))

        dates.forEach((date: string) => {
          if (!reportGroup[date]) {
            reportGroup[date] = {}
          }

          const dateEntries = entry.timeEntry.filter(
            (entry) => formatDayMonthYear(entry.end || new Date().toDateString()) === date,
          )
          if (dateEntries.length) {
            const filteredEntry: Entry = { task: entry.task, timeEntry: dateEntries }
            reportGroup[date][idIssue] = filteredEntry
          }
        })
      }

      if (orderBy && orderBySummary[orderBy.by]) {
        reportGroup = orderBySummary[orderBy.by](reportGroup, orderBy.asc)
      }
    } else {
      reportGroup['allDates'] = reportFiltered
    }

    for (const [dateKey, value] of Object.entries(reportGroup)) {
      let group: Group = {}
      auxReportGroup[dateKey] = group

      if (selectedGroupBy.some((item: FilterOptions) => item.label === 'Project')) {
        for (const [taskKey, taskValue] of Object.entries(value)) {
          const entry = taskValue as Entry
          const projectKey = entry.task?.listLocation.name ?? entry.timeEntry[0]?.clockifyProject?.name ?? 'No project'
          if (!group[projectKey]) {
            group[projectKey] = {}
          }
          group[projectKey][taskKey] = entry
        }

        // faz a ordenaçao pra cada grupo de data
        if (orderBy && orderBySummary[orderBy.by]) {
          auxReportGroup[dateKey] = orderBySummary[orderBy.by](group, orderBy.asc)
        }
      } else {
        auxReportGroup[dateKey]['allProjects'] = value as Report
      }
    }
    reportGroup = auxReportGroup

    auxReportGroup = {}
    for (const [key, value] of Object.entries(reportGroup)) {
      const keyGroup: Group = {}
      auxReportGroup[key] = keyGroup

      for (const [projKey, projVal] of Object.entries(value)) {
        let projectGroup: Group = {}
        keyGroup[projKey] = projectGroup

        if (selectedGroupBy.some((item: FilterOptions) => item.label === 'Assignee')) {
          for (const [taskKey, taskValue] of Object.entries<Entry>(projVal as Report)) {
            const assignees =
              key === 'allDates'
                ? formatUserNamesSortedByParticipation(taskValue.timeEntry).split(', ').flat()
                : formatUserNamesDailyParticipation(taskValue.timeEntry, key)

            assignees.forEach((assignee) => {
              if (!projectGroup[assignee]) {
                projectGroup[assignee] = {}
              }

              const assigneeEntries = taskValue.timeEntry.filter(
                (timeEntry) => timeEntry.clockifyUser.name === assignee,
              )
              if (assigneeEntries) {
                projectGroup[assignee][taskKey] = { task: taskValue.task, timeEntry: assigneeEntries }
              }
            })
          }

          if (orderBy && orderBySummary[orderBy.by]) {
            keyGroup[projKey] = orderBySummary[orderBy.by](projectGroup, orderBy.asc)
          }
        } else {
          projectGroup['allAssignees'] = projVal as Report
        }
      }
    }
    reportGroup = auxReportGroup
  }

  const checkIfStatusInRange = (
    dateRangeStart: Date,
    dateRangeEnd: Date,
    statusHistory: ClickupTaskStatusOnTask[],
    selectedTimeInStatus: string,
  ) => {
    if (statusHistory.length) {
      // Pego todos os valores que estão no range da data, ordeno pelo mais atual
      const valueInRange = statusHistory
        .filter(
          (item: ClickupTaskStatusOnTask) =>
            new Date(item.createdAt) >= dateRangeStart && new Date(item.createdAt) <= dateRangeEnd,
        )
        .sort(
          (a: ClickupTaskStatusOnTask, b: ClickupTaskStatusOnTask) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
        )

      // Se não existir valor no range, o status da issue não mudou nesse período
      // Então pega o status mais atual antes do range da data
      const valuesBeforeRange = statusHistory
        .filter((item: ClickupTaskStatusOnTask) => new Date(item.createdAt) < dateRangeStart)
        .sort(
          (a: ClickupTaskStatusOnTask, b: ClickupTaskStatusOnTask) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
        )

      if (valueInRange.length) {
        return valueInRange[0].statusName === selectedTimeInStatus
      }

      if (valuesBeforeRange.length) {
        return valuesBeforeRange[0].statusName === selectedTimeInStatus
      }
    }

    return false
  }

  const buildUserOverview = () => {
    const assignees = getUniqueUsersAndEmails(report)
    const usersOverviewData: Record<string, UserOverview> = {}

    Object.values(assignees).forEach((assignee: UserOverview) => {
      // todo CU-8678cnfk1
      const userOverview: UserOverview = {
        name: assignee.name,
        email: assignee.email,
        isOnline: false,
        issuesTodo: Math.random(),
        issuesInProgress: Math.random(),
        issuesOverdue: Math.random(),
        issuesTodoWithPriority: Math.random(),
        issuesToReview: Math.random(),
        issuesToTest: Math.random(),
      }

      usersOverviewData[assignee.email] = userOverview
    })

    usersOverview.set(usersOverviewData)
  }

  const handleLogin = async () => {
    try {
      await validateAndSignIn(loginData)
      showToast('Login Successful!')
      loginOpen = false
      await generateReport()
    } catch (e) {
      showToast(e, 'red')
    }
  }
</script>

<main class="text-white py-10 px-4 bg-dark-blue min-h-screen min-w-[1350px] overflow-y-auto">
  <Header
    class="mb-10 h-[87px] min-w-[1300px]"
    {dateRangeStart}
    {dateRangeEnd}
    disabled={loading}
    report={reportFiltered}
    on:generate={refreshData}
    on:openLoginModal={() => (loginOpen = true)}
    on:search={setSearch}
  />

  {#if loading}
    <div transition:scale={{ duration: 500 }}>
      <Loading {loadingText} {loadingOrigin} />
    </div>
  {/if}

  <Toolbar
    {dateRangeStart}
    {dateRangeEnd}
    {filters}
    disabled={loading}
    on:doFilter={setFilterValue}
    class="min-w-[1300px] h-[73px] mb-10"
  />

  {#if reportGroup}
    <TableRender
      class="min-w-[1300px]"
      {reportGroup}
      {selectedGroupBy}
      {dateRangeEnd}
      {dateRangeStart}
      {orderBy}
      bind:showDetails
      bind:showSummary
      bind:showWarnings
      on:orderBy={setOrderByValue}
    />
  {/if}

  {#if loginOpen}
    <Modal on:close={() => (loginOpen = false)} title="Login">
      <form on:submit|preventDefault={handleLogin} class="flex flex-col items-center justify-center w-full pt-5 pb-10">
        <label class="mb-4">
          <div class="font-semibold mb-1">E-mail</div>
          <input
            type="email"
            bind:value={loginData.email}
            class="w-96 bg-transparent border p-2 rounded focus:outline-none focus:border-lilac focus:border-2"
          />
        </label>
        <label class="mb-10">
          <div class="font-semibold mb-1">Password</div>
          <input
            type="password"
            bind:value={loginData.password}
            class="w-96 bg-transparent border p-2 rounded focus:outline-none focus:border-lilac focus:border-2"
          />
        </label>
        <button
          class="w-96 bg-lilac text-white font-bold py-2 px-4 rounded transition duration-500 hover:scale-110"
          type="submit"
        >
          Login
        </button>
      </form>
    </Modal>
  {/if}
</main>
