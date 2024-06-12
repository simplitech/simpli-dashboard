<script lang="ts">
  import { onMount } from 'svelte'
  import { getToken } from '$lib/utils/cacheServices'
  import {
    calculateEstimationError,
    formatUserNamesSortedByParticipation,
    getClockifyEntriesAPI,
    getUniqueUsersAndEmails,
  } from '$lib/utils/clockifyServices'
  import { calculateDelay, clickupIdFromText, getLastStatus, getTaskTimeStatus } from '$lib/utils/clickupServices'
  import Modal from '$lib/components/Modal.svelte'
  import { daysToMilis } from '$lib/utils/helper'
  import Header from '$lib/components/Header.svelte'
  import Toolbar from '$lib/components/Toolbar.svelte'
  import type { Entry, FilterItems, FilterOptions, Filters, Group, Report } from '$lib/utils/format'
  import Loading from '$lib/components/Loading.svelte'
  import { scale } from 'svelte/transition'
  import TableRender from '$lib/components/TableRender.svelte'
  import _ from 'lodash'
  import { showToast } from '$lib/utils/toast'
  import { type Login, validateAndSignIn } from '$lib/utils/loginServices'
  import { createClient, usersOverview } from '$lib/utils/store'
  import type { ClickupTask, ClickupTaskStatusOnTask, ClockifyTimeEntry } from '../graphql/generated'
  import { type OrderBy, orderByColumns } from '$lib/utils/orderby'
  import type { UserOverview } from '$lib/types/UserOverview'
  import { hierarchyGroupBy } from '$lib/utils/groupBy'

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

  let loginOpen = false
  let loginData: Login = {
    email: null,
    password: null,
  }

  let orderBy: OrderBy = {
    asc: false,
    by: 'LAST LOG',
  }
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
          (item: Entry) =>
            item.task?.list?.[0]?.clickupList?.name ?? item.timeEntry?.[0]?.clockifyProject?.name ?? 'No Project',
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
              (value.task?.list?.[0]?.clickupList?.name ??
                value.timeEntry[0]?.clockifyProject?.name ??
                'No Project') === project.label,
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
    reportGroup = hierarchyGroupBy(reportFiltered, selectedGroupBy)
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
