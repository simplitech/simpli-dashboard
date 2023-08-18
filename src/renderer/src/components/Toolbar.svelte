<script lang="ts">
  import { formatReport, type Report, type Filters, type Entry, type FilterOptions } from '../format'
  import { copyToClipboard } from '../helper'
  import { createEventDispatcher } from 'svelte'
  import CustomSelect from './CustomSelect.svelte'

  const dispatch = createEventDispatcher()

  let selectedAssignee: FilterOptions[] = []
  let selectedProject: FilterOptions[] = []
  let selectedStatus: FilterOptions[] = []
  let selectedStatusInPeriod: FilterOptions[] = []
  let selectedGroupBy: FilterOptions[] = []

  export let report: Report
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let filters: Filters
  export let disabled = false
  export let showSummary = true
  export let showDetails = true

  let groupByItems = ['Project', 'Assignee', 'Date'].map((item) => ({ label: item }))

  const copyReportToClipboard = (
    report: Report,
    format: Record<string, (id: string, entry: Entry, dateRangeStart: Date, dateRangeEnd: Date) => string>,
  ) => {
    let headers = Object.keys(format).join('\t') + '\n'
    let rows = ''

    Object.entries(report).forEach(([id, entry]) => {
      Object.keys(format).forEach((reportItem: string) => {
        rows += format[reportItem](id, entry, dateRangeStart, dateRangeEnd)
        rows += '\t'
      })
      rows += '\n'
    })

    copyToClipboard(headers + rows)
  }

  const filter = () => {
    dispatch('doFilter', {
      selectedAssignee: selectedAssignee,
      selectedProject: selectedProject,
      selectedStatus: selectedStatus,
      selectedStatusInPeriod: selectedStatusInPeriod,
      selectedGroupBy: selectedGroupBy,
    })
  }
</script>

<div
  class="bg-purple-gray-500 text-sm rounded-lg px-5 flex flex-row items-center justify-between shadow-[6px_8px_25px_0px_rgba(0,0,0,0.39)] relative {$$props.class}"
  class:opacity-30={disabled}
>
  <div class="flex flex-row gap-x-8">
    <CustomSelect
      class="mr-16"
      title="Assignee"
      placeholder="Find users"
      items={filters.assignee}
      on:filter={filter}
      bind:selectedItems={selectedAssignee}
    />
    <CustomSelect
      class="mr-16"
      title="Project"
      placeholder="Find projects"
      items={filters.project}
      on:filter={filter}
      bind:selectedItems={selectedProject}
    />
    <CustomSelect
      class="mr-16"
      title="Status"
      placeholder="Find status"
      items={filters.status}
      on:filter={filter}
      bind:selectedItems={selectedStatus}
    />
    <CustomSelect
      title="Status In Period"
      placeholder="Find status in period"
      items={filters.status}
      on:filter={filter}
      bind:selectedItems={selectedStatusInPeriod}
    />
  </div>

  <div class="w-[2px] h-9 bg-dark-gray mr-5" />

  <label class="flex flex-row items-center">
    <input type="checkbox" bind:checked={showSummary} class="checkbox" {disabled} />
    Show Summary
  </label>

  <label class="flex flex-row items-center">
    <input type="checkbox" bind:checked={showDetails} class="checkbox" {disabled} />
    Show Details
  </label>

  <div class="w-[2px] h-9 bg-dark-gray" />

  <CustomSelect
    title="Group By"
    items={groupByItems}
    on:filter={filter}
    bind:selectedItems={selectedGroupBy}
    showSearch={false}
  />

  <div class="w-[2px] h-9 bg-dark-gray mr-5" />

  <button
    class="flex flex-row items-center justify-center border border-white rounded-full py-2 px-5 whitespace-nowrap"
    on:click={() => copyReportToClipboard(report, formatReport)}
  >
    <img src="./images/folder.svg" alt="copy icon" class="mr-2" />
    Copy Data to Clipboard
  </button>
</div>

<style>
  :global(.svelte-select) {
    color: white !important;
    background-color: transparent !important;
    border: none !important;
    width: 170px !important;
  }
  :global(.svelte-select-list) {
    background-color: #242731 !important;
  }
  :global(.multi-item) {
    color: #242731 !important;
  }
  :global(.item.hover) {
    background-color: #6c61d0 !important;
  }
</style>
