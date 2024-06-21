<script lang="ts">
  import type { Group, Report, FilterOptions } from '$lib/utils/format'
  import type { OrderBy } from '$lib/utils/orderby'
  import GroupTitle from './GroupTitle.svelte'
  import Table from './Table.svelte'
  import { GroupByEnum } from '$lib/enums/GroupByEnum'
  import TableSummary from '$lib/components/TableSummary.svelte'
  import { allDefaultGroupName, groupByOrder } from '$lib/utils/groupBy'

  export let reportGroup: Group
  export let selectedGroupBy: FilterOptions[]
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let showDetails = true
  export let showSummary = true
  export let showWarnings = true
  export let level = 0
  export let orderBy: OrderBy

  const asReport = (item: Group | Report) => {
    return item as Report
  }

  $: getGroupTitle = () => {
    if (level >= Object.values(GroupByEnum).length) return false
    const groupByLabel = Object.values(GroupByEnum)[level]
    return selectedGroupBy?.some((item: FilterOptions) => item.label.trim() === (groupByLabel as string))
  }
</script>

<div class={$$props.class}>
  {#if showSummary && level === 0 && selectedGroupBy.some((group) => group.label === groupByOrder[0])}
    <TableSummary on:orderBy group={reportGroup} {orderBy} />
  {/if}
  {#each Object.entries(reportGroup) as [key, group]}
    <div class={getGroupTitle() ? 'border border-gray-400 p-5 rounded-lg mb-5' : ''}>
      {#if getGroupTitle()}
        <GroupTitle title={key} />
      {/if}
      {#if showSummary && (!allDefaultGroupName.includes(key) || level === 0)}
        <TableSummary on:orderBy {group} {orderBy} />
      {/if}
      {#if level < Object.keys(GroupByEnum).length - 1}
        <svelte:self
          reportGroup={group}
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
          bind:showDetails
          bind:showWarnings
          class="w-full mb-8"
          report={asReport(group)}
          on:orderBy
        />
      {/if}
    </div>
  {/each}
</div>
