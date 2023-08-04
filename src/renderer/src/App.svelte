<script lang="ts">
  import { onMount } from 'svelte'
  import { getCacheItem, setCacheItem } from './cacheServices'
  import {
    getTimeEntryReportDetailed,
    formatUserNamesSortedByParticipation,
    formatUserNamesDailyParticipation,
    type TimeEntryReportDetailed,
  } from './clockifyServices'
  import type { TimeEntryReportDetailedTimeEntry } from './clockifyServices'
  import { clickupIdFromText, getTask, type Task, type TaskTimeStatus } from './clickupServices'
  import Modal from './components/Modal.svelte'
  import type { Config } from './helper'
  import Header from './components/Header.svelte'
  import Toolbar from './components/Toolbar.svelte'
  import { formatDayMonthYear, type Entry, type Filters, type Report, type SelectedValue, type Group } from './format'
  import Loading from './components/Loading.svelte'
  import { scale } from 'svelte/transition'
  import TableRender from './components/TableRender.svelte'
  import _ from 'lodash'

  let report: Report = null
  let reportFiltered: Report = null
  let loading = false
  let loadingText = ''
  let loadingOrigin = ''

  let configOpen = false
  let config: Config = {
    clockifyApiKey: '',
    clockifyWorkspaceId: '6053a39bc15f5f7905d37b9d',
    clickupApiKey: '',
  }

  let filters: Filters = {}
  let projectFilter: string[] = []
  let statusFilter: string[] = []
  let assigneeFilter: string[] = []

  let selectedProject: SelectedValue[] = null
  let selectedStatus: SelectedValue[] = null
  let selectedAssignee: SelectedValue[] = null
  let selectedStatusInPeriod: SelectedValue[] = null
  let selectedGroupBy: SelectedValue[] = null
  let searchValue: string = null

  let now = new Date()
  let dateRangeStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
  let dateRangeEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

  let taskList: string[] = []

  let reportGroup: Group = {}
  let auxReportGroup: Group = {}

  $: showSummary = true
  $: showDetails = true

  onMount(async () => {
    const cacheConfig = await getCacheItem('config')
    if (cacheConfig) {
      config = cacheConfig as Config
    }
    if (!config.clockifyApiKey || !config.clickupApiKey) {
      configOpen = true
    } else {
      await generateReport()
    }
  })

  const saveConfig = async () => {
    await setCacheItem('config', config, 365 * 24 * 60 * 60 * 1000)
    generateReport()
    configOpen = false
  }

  const openConfigModal = () => {
    configOpen = true
  }

  const setDateAndGenerate = async (event: CustomEvent) => {
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
          (item: Entry) => item.task?.list.name ?? item.timeEntry?.[0]?.projectName ?? 'No Project',
        ),
      ),
    ].sort()
    statusFilter = [
      ...new Set(Object.values(report).map((item: Entry) => item.task?.status.status ?? 'no status')),
    ].sort()
    assigneeFilter = [
      ...new Set(
        Object.values(report)
          .map((item: Entry) => formatUserNamesSortedByParticipation(item.timeEntry).split(', '))
          .flat(),
      ),
    ].sort()

    filters = {
      project: projectFilter,
      status: statusFilter,
      assignee: assigneeFilter,
    }

    handleFilters()

    loading = false
  }

  const getClockifyEntries = async (): Promise<Report> => {
    loadingOrigin = 'Clockify...'
    let page = 1
    let clockifyData: TimeEntryReportDetailed | null = null
    do {
      let pageClockifyData = await getTimeEntryReportDetailed(
        {
          dateRangeStart: dateRangeStart.toISOString(),
          dateRangeEnd: dateRangeEnd.toISOString(),
          detailedFilter: { page, pageSize: 1000 },
        },
        config,
      )
      if (!clockifyData) {
        clockifyData = pageClockifyData
      } else {
        clockifyData.timeentries.push(...pageClockifyData.timeentries)
      }
      page++
    } while (clockifyData.totals[0].entriesCount > clockifyData.timeentries.length)

    const resp: Report = {}
    taskList = []
    for (const clockifyEntry of clockifyData.timeentries) {
      let id = clickupIdFromText(clockifyEntry.description)
      const idFound = Boolean(id)
      /** Eu coloco a description + projeto por conta que podem existir 2
       * tasks flex com o mesmo nome, mas de projetos diferentes (Ex: CR)
       *  e como o id será usado como atributo do resp, então não daria
       *  pra ter vários atributos com mesmo nome. Como toda task tem
       *  pelo menos uma timeEntry, então deve se pegar o nome da issue
       *  por ela.
       */
      id = id || `${clockifyEntry.description} - ${clockifyEntry.projectName}`

      if (!resp[id]) {
        resp[id] = { timeEntry: [], task: null }
      }

      resp[id].timeEntry.push(clockifyEntry)
      if (idFound && !resp[id].task) {
        const cache = (await getCacheItem(`clickup-task-${id}`)) as Task
        if (cache) {
          resp[id].task = cache
          taskList.push(id)
          continue
        }

        try {
          loadingOrigin = 'ClickUp'
          loadingText = `${id}...`
          const clickupTask = await getTask(id, config)
          resp[id].task = clickupTask
          taskList.push(id)
          setCacheItem(`clickup-task-${id}`, clickupTask)
        } catch (e) {
          resp[id].taskError = e.response.data.err
          if (e.response.data.err.includes('Rate limit')) {
            break
          }
        }
      }
    }

    return resp
  }

  const setSearch = (event: CustomEvent) => {
    searchValue = event.detail.searchValue

    handleFilters()
  }

  const setFilterValue = (event: CustomEvent) => {
    selectedAssignee = event.detail.selectedAssignee
    selectedProject = event.detail.selectedProject
    selectedStatus = event.detail.selectedStatus
    selectedStatusInPeriod = event.detail.selectedStatusInPeriod
    selectedGroupBy = event.detail.selectedGroupBy

    handleFilters()
  }

  function handleFilters() {
    reportFiltered = _.cloneDeep(report)

    if (selectedStatus) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedStatus).some((status) => (value.task?.status.status ?? 'no status') === status.value),
        ),
      )
    }

    if (selectedProject) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedProject).some(
            (project: SelectedValue) =>
              (value.task?.list.name ?? value.timeEntry?.[0]?.projectName ?? 'No Project') === project.value,
          ),
        ),
      )
    }

    if (selectedAssignee) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedAssignee).some((assignee: SelectedValue) =>
            formatUserNamesSortedByParticipation(value.timeEntry)
              .split(', ')
              .some((name: string) => name === assignee.value),
          ),
        ),
      )

      Object.entries(reportFiltered).forEach(([, value]) => {
        value.timeEntry = value.timeEntry.filter((entry: TimeEntryReportDetailedTimeEntry) =>
          Object.values(selectedAssignee).some((assignee: SelectedValue) => entry.userName === assignee.value),
        )
      })
    }

    if (selectedStatusInPeriod) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedStatusInPeriod).some((timeInStatus: SelectedValue) => {
            if (!value.task) return false
            return checkIfStatusInRange(
              dateRangeStart,
              dateRangeEnd,
              value.task?.timeStatus?.status_history,
              timeInStatus.value,
            )
          }),
        ),
      )
    }

    if (searchValue) {
      const searchFormatted = searchValue.toLowerCase()
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(
          ([key, value]) =>
            key.toLowerCase().includes(searchFormatted) ||
            value.task?.id.toLowerCase().includes(searchFormatted) ||
            value.task?.name.toLowerCase().includes(searchFormatted),
        ),
      )
    }

    handleGroupBy()
  }

  const handleGroupBy = () => {
    reportGroup = {}
    auxReportGroup = {}

    if (selectedGroupBy?.some((item: SelectedValue) => item.value === 'Date')) {
      for (const [idIssue, entry] of Object.entries(reportFiltered)) {
        const dates = new Set(entry.timeEntry.map((item) => formatDayMonthYear(item.timeInterval.start)))

        dates.forEach((date: string) => {
          if (!reportGroup[date]) {
            reportGroup[date] = {}
          }
          reportGroup[date][idIssue] = entry
        })
      }
    } else {
      reportGroup['allDates'] = reportFiltered
    }

    for (const [dateKey, value] of Object.entries(reportGroup)) {
      auxReportGroup[dateKey] = {}

      if (selectedGroupBy?.some((item: SelectedValue) => item.value === 'Project')) {
        for (const [taskKey, taskValue] of Object.entries(value)) {
          const entry = taskValue as Entry
          const projectKey = entry.task?.list.name ?? entry.timeEntry?.[0]?.projectName ?? 'No project'
          if (!auxReportGroup[dateKey][projectKey]) {
            auxReportGroup[dateKey][projectKey] = {}
          }
          auxReportGroup[dateKey][projectKey][taskKey] = entry
        }
      } else {
        auxReportGroup[dateKey]['allProjects'] = value as Report
      }
    }
    reportGroup = auxReportGroup

    auxReportGroup = {}
    for (const [key, value] of Object.entries(reportGroup)) {
      auxReportGroup[key] = {}

      for (const [projKey, projVal] of Object.entries(value)) {
        auxReportGroup[key][projKey] = {}

        if (selectedGroupBy?.some((item) => item.value === 'Assignee')) {
          for (const [taskKey, taskValue] of Object.entries<Entry>(projVal)) {
            const assignees =
              key === 'allDates'
                ? formatUserNamesSortedByParticipation(taskValue.timeEntry).split(', ').flat()
                : formatUserNamesDailyParticipation(taskValue.timeEntry, key)
            assignees.forEach((assignee) => {
              if (!auxReportGroup[key][projKey][assignee]) {
                auxReportGroup[key][projKey][assignee] = {}
              }
              auxReportGroup[key][projKey][assignee][taskKey] = taskValue as Entry
            })
          }
        } else {
          auxReportGroup[key][projKey]['allAssignees'] = projVal as Report
        }
      }
    }
    reportGroup = auxReportGroup
  }

  const checkIfStatusInRange = (
    dateRangeStart: Date,
    dateRangeEnd: Date,
    statusHistory: TaskTimeStatus[],
    selectedTimeInStatus: string,
  ) => {
    if (statusHistory) {
      statusHistory.sort((a: TaskTimeStatus, b: TaskTimeStatus) => b.total_time.since - a.total_time.since)

      // Pego todos os valores que estão no range da data, ordeno pelo mais atual e pego ele
      const valueInRange = statusHistory
        .filter(
          (item: TaskTimeStatus) =>
            new Date(item.total_time.since) >= dateRangeStart && new Date(item.total_time.since) <= dateRangeEnd,
        )
        .sort((a: TaskTimeStatus, b: TaskTimeStatus) => b.total_time.since - a.total_time.since)
      // Se não existir valor no range, o status da issue não mudou no range de data filtrado. Então pega o status mais atual
      const valoresMenores = statusHistory
        .filter((item: TaskTimeStatus) => new Date(item.total_time.since) < dateRangeStart)
        .sort((a: TaskTimeStatus, b: TaskTimeStatus) => b.total_time.since - a.total_time.since)

      if (valueInRange.length) {
        return valueInRange[0].status === selectedTimeInStatus
      } else if (valoresMenores.length) {
        return valoresMenores[0].status === selectedTimeInStatus
      }

      return false
    } else {
      return false
    }
  }
</script>

<main class="py-10 px-4 bg-dark-blue min-h-screen min-w-[1350px]">
  <Header
    class="mb-10 h-[87px] min-w-[1300px]"
    {dateRangeStart}
    {dateRangeEnd}
    disabled={loading}
    on:generate={setDateAndGenerate}
    on:openConfigModal={openConfigModal}
    on:search={setSearch}
  />
  {#if loading}
    <div transition:scale={{ duration: 500 }}>
      <Loading {loadingText} {loadingOrigin} />
    </div>
  {/if}
  <Toolbar
    report={reportFiltered}
    {dateRangeStart}
    {dateRangeEnd}
    {filters}
    disabled={loading}
    bind:showDetails
    bind:showSummary
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
      bind:showDetails
      bind:showSummary
    />
  {/if}

  {#if configOpen}
    <Modal on:close={() => (configOpen = false)} title="Config">
      <form on:submit|preventDefault={saveConfig} class="flex flex-col m-3">
        <label class="mb-3">
          <div class="font-bold">Clockify API Key</div>
          <input type="text" bind:value={config.clockifyApiKey} class="w-64 bg-black p-2 rounded" />
        </label>
        <label class="mb-3">
          <div class="font-bold">Clockify Workspace ID</div>
          <input type="text" bind:value={config.clockifyWorkspaceId} class="w-64 bg-black p-2 rounded" />
        </label>
        <label class="mb-3">
          <div class="font-bold">ClickUp API Key</div>
          <input type="text" bind:value={config.clickupApiKey} class="w-64 bg-black p-2 rounded" />
        </label>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Save
        </button>
      </form>
    </Modal>
  {/if}
</main>
