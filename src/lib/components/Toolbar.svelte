<script lang="ts">
  import type { FilterItems, Filters, FilterPreset } from '$lib/utils/format'
  import { createEventDispatcher } from 'svelte'
  import CustomSelect from './CustomSelect.svelte'
  import AddPreset from './AddPreset.svelte'
  import Presets from './Presets.svelte'

  const dispatch = createEventDispatcher()

  export let filters: FilterItems
  export let disabled = false

  let groupByItems = ['Project', 'Assignee', 'Date'].map((item) => ({ label: item }))

  let selectedFilters: Filters = {
    selectedAssignee: [],
    selectedProject: [],
    selectedStatus: [],
    selectedStatusInPeriod: [],
    selectedGroupBy: [],
    showWarnings: true,
    showSummary: true,
    showDetails: true,
  }

  const handleCheckWarnings = () => {
    if (!selectedFilters.showWarnings) {
      selectedFilters.showDetails = false
    }

    filter()
  }

  const handleCheckDetails = () => {
    if (filters.showDetails) {
      selectedFilters.showWarnings = true
    }

    filter()
  }

  const applyPreset = (event: CustomEvent<FilterPreset>) => {
    selectedFilters = event.detail

    filter()
  }

  const filter = () => {
    dispatch('doFilter', selectedFilters)
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
      bind:selectedItems={selectedFilters.selectedAssignee}
      buttonClass="w-[75px]"
    />
    <CustomSelect
      class="mr-16"
      title="Project"
      placeholder="Find projects"
      items={filters.project}
      on:filter={filter}
      bind:selectedItems={selectedFilters.selectedProject}
      buttonClass="w-[75px]"
    />
    <CustomSelect
      class="mr-16"
      title="Status"
      placeholder="Find status"
      items={filters.status}
      on:filter={filter}
      bind:selectedItems={selectedFilters.selectedStatus}
      buttonClass="w-[75px]"
    />
    <CustomSelect
      title="Status In Period"
      placeholder="Find status in period"
      items={filters.status}
      on:filter={filter}
      bind:selectedItems={selectedFilters.selectedStatusInPeriod}
      buttonClass="w-[125px]"
    />
  </div>

  <div class="w-[2px] h-9 bg-gray-500 mr-5" />

  <label class="flex flex-row items-center">
    <input type="checkbox" bind:checked={selectedFilters.showSummary} on:change={filter} class="checkbox" {disabled} />
    Show Summary
  </label>

  <label class="flex flex-row items-center">
    <input
      type="checkbox"
      bind:checked={selectedFilters.showDetails}
      on:change={handleCheckDetails}
      class="checkbox"
      {disabled}
    />
    Show Details
  </label>

  <label class="flex flex-row items-center">
    <input
      type="checkbox"
      bind:checked={selectedFilters.showWarnings}
      on:change={handleCheckWarnings}
      class="checkbox"
      {disabled}
    />
    Show Warnings
  </label>

  <div class="w-[2px] h-9 bg-gray-500" />

  <CustomSelect
    title="Group By"
    items={groupByItems}
    on:filter={filter}
    bind:selectedItems={selectedFilters.selectedGroupBy}
    showSearch={false}
    buttonClass="w-[85px]"
  />

  <div class="w-[2px] h-9 bg-gray-500 mr-5" />

  <div class="flex gap-x-4">
    <AddPreset {selectedFilters} />

    <Presets on:applyPreset={applyPreset} />
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
