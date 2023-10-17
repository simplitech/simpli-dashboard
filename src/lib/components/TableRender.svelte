<script lang="ts">
  import type { Group, Report, FilterOptions } from '$lib/utils/format'
  import type { OrderBy } from '$lib/utils/orderby'
  import GroupTitle from './GroupTitle.svelte'
  import Table from './Table.svelte'

  export let reportGroup: Group
  export let selectedGroupBy: FilterOptions[]
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let showSummary = true
  export let showDetails = true
  export let showWarnings = true
  export let level = 0
  export let orderBy: OrderBy

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
  {#each Object.entries(reportGroup) as [key, value]}
    <div class={getGroupTitle() ? 'border border-gray-400 p-5 rounded-lg mb-5' : ''}>
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
          {showWarnings}
          {orderBy}
          level={level + 1}
          on:orderBy
        />
      {:else}
        <Table
          {dateRangeStart}
          {dateRangeEnd}
          {orderBy}
          bind:showSummary
          bind:showDetails
          bind:showWarnings
          class="w-full mb-8"
          report={asReport(value)}
          on:orderBy
        />
      {/if}
    </div>
  {/each}
</div>
