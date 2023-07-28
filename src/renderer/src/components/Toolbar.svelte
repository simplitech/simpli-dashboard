<script lang="ts">
  import Select from 'svelte-select'
  import { formatReport, type Report, type Filters, type SelectedValue, type Entry } from '../format'
  import { copyToClipboard } from '../helper'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let selectedAssignee: SelectedValue[] = null
  let selectedProject: SelectedValue[] = null
  let selectedStatus: SelectedValue[] = null
  let selectedStatusInPeriod: SelectedValue[] = null
  let selectedGroupBy: SelectedValue[] = null

  export let report: Report
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let filters: Filters
  export let disabled = false
  export let showSummary = true
  export let showDetails = true

  let groupByItems = ['Project', 'Assignee', 'Date']

  const copyReportToClipboard = (
    report: Report,
    format: Record<
      string,
      (id: string, entry: Entry, dateRangeStart: Date, dateRangeEnd: Date, selectedAssignee: SelectedValue[]) => string
    >,
  ) => {
    let headers = Object.keys(format).join('\t') + '\n'
    let rows = ''

    Object.entries(report).forEach(([id, entry]) => {
      Object.keys(format).forEach((reportItem: string) => {
        rows += format[reportItem](id, entry, dateRangeStart, dateRangeEnd, selectedAssignee)
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
  class="bg-purple-gray text-sm rounded-lg px-5 flex flex-row items-center justify-between shadow-[6px_8px_25px_0px_rgba(0,0,0,0.39)] relative {$$props.class}"
  class:opacity-30={disabled}
>
  <div class="flex flex-row gap-x-2">
    <Select
      searchable
      multiple
      showChevron
      placeholder="Assignee"
      items={filters.assignee}
      bind:value={selectedAssignee}
      on:input={filter}
      {disabled}
    />
    <Select
      searchable
      multiple
      showChevron
      placeholder="Project"
      items={filters.project}
      bind:value={selectedProject}
      on:input={filter}
      {disabled}
    />
    <Select
      searchable
      multiple
      showChevron
      placeholder="Status"
      items={filters.status}
      bind:value={selectedStatus}
      on:input={filter}
      {disabled}
    />
    <Select
      searchable
      multiple
      showChevron
      placeholder="Status in Period"
      items={filters.status}
      bind:value={selectedStatusInPeriod}
      on:input={filter}
      {disabled}
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

  <Select
    items={groupByItems}
    multiple
    showChevron
    placeholder="Group By"
    bind:value={selectedGroupBy}
    on:input={filter}
    {disabled}
  />

  <div class="w-[2px] h-9 bg-dark-gray mr-5" />

  <button
    class="flex flex-row items-center border border-white rounded-full py-2 px-5 whitespace-nowrap"
    on:click={() => copyReportToClipboard(report, formatReport)}
  >
    <img src="/images/folder.svg" alt="copy icon" class="mr-2" />
    Copy Data to Clipboard
  </button>
</div>

<style>
  :global(.svelte-select) {
    color: white !important;
    background-color: transparent !important;
    border: none !important;
    width: 200px !important;
  }
  :global(.svelte-select-list) {
    background-color: #242731 !important;
  }
</style>
