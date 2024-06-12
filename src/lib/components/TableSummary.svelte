<script lang="ts">
  import { avgDaysStatus, avgEstimativeError, sumTimeEstimate } from '$lib/utils/clickupServices'
  import { countTasks, getAllAssigners, sumTimeTracked } from '$lib/utils/clockifyServices'
  import {
    formatDuration,
    formatDurationClock,
    formatDurationOnlyDays,
    type Group,
    type Report,
  } from '$lib/utils/format'
  import HeaderOrderBy from '$lib/components/HeaderOrderBy.svelte'
  import type { OrderBy } from '$lib/utils/orderby'

  export let group: Report | Group
  export let orderBy: OrderBy
</script>

<div class="summary-grid text-sm flex flex-row pb-2">
  <div class="summary-grid__header min-w-[400px] max-w-[600px]">
    {countTasks(group)} TASKS
  </div>
  <div class="summary-grid__header">ASSIGNEE</div>
  <div class="summary-grid__header">TASK ID</div>
  <HeaderOrderBy on:orderBy {orderBy} headerText="TIME TRACKED" class="summary-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="TIME ESTIMATE" class="summary-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="ESTIMATIVE ERROR" class="summary-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="DUE DATE" class="summary-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="DELAY" class="summary-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="LAST LOG" class="summary-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="TO REVIEW" class="summary-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="TO TEST" class="summary-grid__header" />
  <div class="table-summary min-w-[400px] max-w-[600px] rounded-l-lg" />
  <div class="table-summary">Count: {getAllAssigners(group).size}</div>
  <div class="table-summary" />
  <div class="table-summary">Sum: {formatDurationClock(sumTimeTracked(group))}</div>
  <div class="table-summary">Sum: {formatDuration(sumTimeEstimate(group))}</div>
  <div class="table-summary">Avg: {avgEstimativeError(group).toFixed(2)}</div>
  <div class="table-summary" />
  <div class="table-summary" />
  <div class="table-summary" />
  <div class="table-summary">Avg: {formatDurationOnlyDays(avgDaysStatus(group, 'to review'))}</div>
  <div class="table-summary rounded-r-lg">Avg: {formatDurationOnlyDays(avgDaysStatus(group, 'to test'))}</div>
</div>

<style>
  .table-summary {
    @apply bg-dark-purple px-5 h-[46px] text-xs font-bold text-gray-400 text-center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    row-gap: 10px;
  }

  .summary-grid > div:first-child {
    @apply text-left;
  }

  :global(.summary-grid__header) {
    @apply text-gray-400 font-semibold text-center;
  }
</style>
