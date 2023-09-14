<script lang="ts">
  import type { Filters, FilterOptions, SelectedFilters } from '$lib/utils/format'
  import { createEventDispatcher } from 'svelte'
  import CustomSelect from './CustomSelect.svelte'
  import PresetPopover from './AddPreset.svelte'
  import MyPresetsPopover from './Presets.svelte'

  const dispatch = createEventDispatcher()

  let selectedAssignee: FilterOptions[] = []
  let selectedProject: FilterOptions[] = []
  let selectedStatus: FilterOptions[] = []
  let selectedStatusInPeriod: FilterOptions[] = []
  let selectedGroupBy: FilterOptions[] = []
  let showWarnings = true

  export let filters: Filters
  export let disabled = false
  export let showSummary = true
  export let showDetails = true

  let groupByItems = ['Project', 'Assignee', 'Date'].map((item) => ({ label: item }))

  $: selectedFilters = {
    selectedAssignee: selectedAssignee,
    selectedProject: selectedProject,
    selectedStatus: selectedStatus,
    selectedStatusInPeriod: selectedStatusInPeriod,
    selectedGroupBy: selectedGroupBy,
    showWarnings: showWarnings,
    showDetails: showDetails,
    showSummary: showSummary,
  } as SelectedFilters

  const handleCheckWarnings = () => {
    if (!showWarnings) {
      showDetails = false
    }

    filter()
  }

  const handleCheckDetails = () => {
    if (showDetails) {
      showWarnings = true
    }

    filter()
  }

  const filter = (event?: CustomEvent) => {
    if (event.detail) {
      selectedAssignee = event.detail?.selectedAssignee
      selectedProject = event.detail?.selectedProject
      ;(selectedStatus = event.detail?.selectedStatus), (selectedStatusInPeriod = event.detail?.selectedStatusInPeriod)
      selectedGroupBy = event.detail?.selectedGroupBy
      showWarnings = event.detail?.showWarnings
      showDetails = event.detail?.showDetails
      showSummary = event.detail?.showSummary
    }

    dispatch('doFilter', {
      selectedAssignee: selectedAssignee,
      selectedProject: selectedProject,
      selectedStatus: selectedStatus,
      selectedStatusInPeriod: selectedStatusInPeriod,
      selectedGroupBy: selectedGroupBy,
      showWarnings: showWarnings,
      showDetails: showDetails,
      showSummary: showSummary,
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
    <input type="checkbox" bind:checked={showDetails} on:change={handleCheckDetails} class="checkbox" {disabled} />
    Show Details
  </label>

  <label class="flex flex-row items-center">
    <input type="checkbox" bind:checked={showWarnings} on:change={handleCheckWarnings} class="checkbox" {disabled} />
    Show Warnings
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

  <div class="flex gap-x-4">
    <PresetPopover {selectedFilters} />

    <MyPresetsPopover on:doFilter={filter} />
  </div>
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
