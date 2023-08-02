<script lang="ts">
  import { avgDaysStatus, avgEstimativeError, sumTimeEstimate } from '../clickupServices'
  import { countUserNames, sumTimeTracked } from '../clockifyServices'
  import type { Report, SelectedValue } from '../format'

  export let report: Report
  export let selectedAssignee: SelectedValue[]
</script>

<div class="table-summary w-[700px] rounded-l-lg" />
<div class="table-summary">Count: {countUserNames(report)}</div>
<div class="table-summary" />
<div class="table-summary">Sum: {sumTimeTracked(report, selectedAssignee)}</div>
<div class="table-summary">Sum: {sumTimeEstimate(report)}</div>
<div class="table-summary">Avg: {avgEstimativeError(report)}</div>
<div class="table-summary" />
<div class="table-summary" />
<div class="table-summary">Avg: {avgDaysStatus(report, 'to review')}</div>
<div class="table-summary rounded-r-lg">Avg: {avgDaysStatus(report, 'to test')}</div>

<style>
  .table-summary {
    @apply bg-dark-purple px-5 h-[46px] text-xs font-bold text-light-gray text-center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
