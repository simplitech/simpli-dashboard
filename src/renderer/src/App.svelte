<script lang="ts">
  import { onMount } from 'svelte'
  import { getCacheItem, setCacheItem } from './cacheServices'
  import {
    getTimeEntryReportDetailed,
    formatUserNamesSortedByParticipation,
    type TimeEntryReportDetailed,
  } from './clockifyServices'
  import { clickupIdFromText, getTask, getTaskListTime, type BulkTimeStatus } from './clickupServices'
  import Modal from './components/Modal.svelte'
  import { chunkArray } from './helper'
  import Header from './components/Header.svelte'
  import Toolbar from './components/Toolbar.svelte'
  import Table from './components/Table.svelte'
  import type { Entry, Filters, Report, SelectedValue } from './format'
  import Loading from './components/Loading.svelte'
  import { scale } from 'svelte/transition'

  let report: Report = null
  let reportFiltered: Report = null
  let loading = false
  let loadingText = ''
  let loadingOrigin = ''

  let configOpen = false
  let config = {
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
  let searchValue: string = null

  let now = new Date()
  let dateRangeStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
  let dateRangeEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

  let taskList: string[] = []

  $: showSummary = true
  $: showDetails = true

  onMount(async () => {
    const cacheConfig = await getCacheItem('config')
    if (cacheConfig) {
      config = cacheConfig
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

  const setDateAndGenerate = async (event) => {
    dateRangeStart = event.detail.dateRangeStart
    dateRangeEnd = event.detail.dateRangeEnd

    await generateReport()
  }

  const generateReport = async () => {
    loading = true

    const clockifyEntries = await getClockifyEntries()
    const taskTimes = await getTasksTime()

    const resp = await matchTaskTime(clockifyEntries, taskTimes)

    report = resp
    reportFiltered = resp

    projectFilter = [
      ...new Set(
        Object.values(report).map((item: Entry) => item.task?.list.name ?? item.timeEntry?.[0]?.projectName ?? ''),
      ),
    ].sort()
    statusFilter = [...new Set(Object.values(report).map((item: Entry) => item.task?.status.status ?? ''))].sort()
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

  const getClockifyEntries = async () => {
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
      id = id || clockifyEntry.description

      if (!resp[id]) {
        resp[id] = { timeEntry: [], task: null }
      }

      resp[id].timeEntry.push(clockifyEntry)

      if (idFound && !resp[id].task) {
        const cache = await getCacheItem(`clickup-task-${id}`)
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

  const getTasksTime = async () => {
    loadingOrigin = 'ClickUp'
    loadingText = 'bulk_time_in_status...'
    const tasksChunkList = chunkArray(taskList, 100)
    const taskTimes: BulkTimeStatus[] = []
    for (const taskChunk of tasksChunkList) {
      taskTimes.push(await getTaskListTime(taskChunk, config))
    }
    return taskTimes
  }

  const matchTaskTime = (report, taskTimes) => {
    taskTimes.forEach((task) => {
      Object.entries(task).forEach(([key, value]) => {
        if (report[key].task) {
          report[key].task.timeStatus = value
        }
      })
    })

    return report
  }

  const setSearch = (event) => {
    searchValue = event.detail.searchValue

    handleFilters()
  }

  const setFilterValue = (event) => {
    selectedAssignee = event.detail.selectedAssignee
    selectedProject = event.detail.selectedProject
    selectedStatus = event.detail.selectedStatus
    selectedStatusInPeriod = event.detail.selectedStatusInPeriod

    handleFilters()
  }

  function handleFilters() {
    reportFiltered = report

    if (selectedStatus) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedStatus).some((status) => (value.task?.status.status ?? '') === status.value),
        ),
      )
    }

    if (selectedProject) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedProject).some(
            (project) => (value.task?.list.name ?? value.timeEntry?.[0]?.projectName ?? '') === project.value,
          ),
        ),
      )
    }

    if (selectedAssignee) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedAssignee).some((assignee) =>
            formatUserNamesSortedByParticipation(value.timeEntry)
              .split(', ')
              .some((name) => name === assignee.value),
          ),
        ),
      )
    }

    if (selectedStatusInPeriod) {
      reportFiltered = Object.fromEntries(
        Object.entries(reportFiltered).filter(([, value]) =>
          Object.values(selectedStatusInPeriod).some((timeInStatus) => {
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
  }

  const checkIfStatusInRange = (dateRangeStart, dateRangeEnd, statusHistory, selectedTimeInStatus: string) => {
    if (statusHistory) {
      statusHistory.sort((a, b) => b.total_time.since - a.total_time.since)

      // Pego todos os valores que estão no range da data, ordeno pelo mais atual e pego ele
      const valueInRange = statusHistory
        .filter((item) => item.total_time.since >= dateRangeStart && item.total_time.since <= dateRangeEnd)
        .sort((a, b) => b.total_time.since - a.total_time.since)
      // Se não existir valor no range, o status da issue não mudou no range de data filtrado. Então pega o status mais atual
      const valoresMenores = statusHistory
        .filter((item) => item.total_time.since < dateRangeStart)
        .sort((a, b) => b.total_time.since - a.total_time.since)

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

<main class="py-10 px-5 bg-dark-blue min-h-screen min-w-[1600px]">
  <Header
    class="w-full mb-10 h-[87px]"
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
    class="w-full h-[73px] mb-10"
  />
  {#if reportFiltered}
    <Table
      {dateRangeStart}
      {dateRangeEnd}
      bind:showSummary
      bind:showDetails
      class="w-full"
      report={reportFiltered}
      {selectedAssignee}
    />
  {/if}
  {#if configOpen}
    <Modal on:close={() => (configOpen = false)} title="Config">
      <form on:submit|preventDefault={saveConfig} class="flex flex-col m-3">
        <label class="mb-3">
          <div class="font-bold">Clockify API Key</div>
          <input type="text" bind:value={config.clockifyApiKey} class="w-64 bg-white dark:bg-black p-2 rounded" />
        </label>
        <label class="mb-3">
          <div class="font-bold">Clockify Workspace ID</div>
          <input type="text" bind:value={config.clockifyWorkspaceId} class="w-64 bg-white dark:bg-black p-2 rounded" />
        </label>
        <label class="mb-3">
          <div class="font-bold">ClickUp API Key</div>
          <input type="text" bind:value={config.clickupApiKey} class="w-64 bg-white dark:bg-black p-2 rounded" />
        </label>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Save
        </button>
      </form>
    </Modal>
  {/if}
</main>

<style global>
  body {
    color: #eee;
  }
</style>
