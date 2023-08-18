<script lang="ts">
  import type { Group, Report, FilterOptions } from '../format'
  import GroupTitle from './GroupTitle.svelte'
  import Table from './Table.svelte'

  export let reportGroup: Group
  export let selectedGroupBy: FilterOptions[]
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let showSummary = true
  export let showDetails = true
  export let level = 0

  const asReport = (item: Group | Report) => {
    return item as Report
  }

  $: getGroupTitle = () => {
    switch (level) {
      case 0:
        return selectedGroupBy?.some((item: FilterOptions) => item.label === 'Date')
      case 1:
        return selectedGroupBy?.some((item: FilterOptions) => item.label === 'Project')
      case 2:
        return selectedGroupBy?.some((item: FilterOptions) => item.label === 'Assignee')
      default:
        return false
    }
  }
</script>

<div class={$$props.class}>
  {#each Object.entries(reportGroup).sort() as [key, value]}
    <div class={getGroupTitle() ? 'border border-light-gray p-5 rounded-lg mb-5' : ''}>
      {#if getGroupTitle()}
        <GroupTitle title={key} />
      {/if}
      {#if level < 2}
        <svelte:self
          reportGroup={value}
          {selectedGroupBy}
          {dateRangeEnd}
          {dateRangeStart}
          {showDetails}
          {showSummary}
          level={level + 1}
        />
      {:else}
        <Table
          {dateRangeStart}
          {dateRangeEnd}
          bind:showSummary
          bind:showDetails
          class="w-full mb-8"
          report={asReport(value)}
        />
      {/if}
    </div>
  {/each}
</div>
