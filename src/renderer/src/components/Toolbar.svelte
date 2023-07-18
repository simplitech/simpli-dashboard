<script lang="ts">
  import Select from 'svelte-select'
  import { formatReport, type Report, type Filters, type SelectedValue } from '../format'
  import { copyToClipboard } from '../helper'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let showSummary = false
  let showDetails = false

  let selectedAssignee: SelectedValue[] = null
  let selectedProject: SelectedValue[] = null
  let selectedStatus: SelectedValue[] = null
  let selectedStatusInPeriod: SelectedValue[] = null

  export let report: Report
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let filters: Filters

  const copyReportToClipboard = (report, format) => {
    let headers = Object.keys(report).join('\t') + '\n'
    let rows = ''

    Object.entries(report).forEach(([id, entry]) => {
      Object.keys(format).forEach((reportItem) => {
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
    })
  }
</script>

<div
  class="bg-purple-gray text-sm rounded-lg px-5 flex flex-row items-center justify-between shadow-[6px_8px_25px_0px_rgba(0,0,0,0.39)] {$$props.class}"
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
    />
    <Select
      searchable
      multiple
      showChevron
      placeholder="Project"
      items={filters.project}
      bind:value={selectedProject}
      on:input={filter}
    />
    <Select
      searchable
      multiple
      showChevron
      placeholder="Status"
      items={filters.status}
      bind:value={selectedStatus}
      on:input={filter}
    />
    <Select
      searchable
      multiple
      showChevron
      placeholder="Status in Period"
      items={filters.status}
      bind:value={selectedStatusInPeriod}
      on:input={filter}
    />
  </div>

  <div class="w-[2px] h-9 bg-dark-gray mr-5" />

  <label class="flex flex-row items-center">
    <input type="checkbox" bind:value={showSummary} class="checkbox" />
    Show Summary
  </label>

  <label class="flex flex-row items-center">
    <input type="checkbox" bind:value={showDetails} class="checkbox" />
    Show Details
  </label>

  <div class="w-[2px] h-9 bg-dark-gray" />

  <span>Group By</span>

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
