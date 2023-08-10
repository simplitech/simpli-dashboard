<script lang="ts">
  import { getTaskTimeStatus } from '../clickupServices'
  import {
    calculateEstimationError,
    clockifyUrl,
    formatUserNamesSortedByParticipation,
    getUserParticipation,
    sumDurations,
  } from '../clockifyServices'
  import {
    formatDurationOnlyDays,
    formatDateDayMonth,
    type Report,
    formatUnixDate,
    formatDuration,
    formatDurationClock,
    getUserInitials,
    type Entry,
  } from '../format'
  import { daysToMilis, getContrastColorHex } from '../helper'
  import TableSummary from './TableSummary.svelte'

  export let report: Report
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let showSummary = true
  export let showDetails = true

  function getProjectName(entry: Entry): string {
    return entry.task?.list.name ?? entry.timeEntry?.[0]?.projectName ?? 'No project'
  }

  function getTaskName(entry: Entry): string {
    return (entry.task?.name ?? entry.timeEntry[0].description) as string
  }
</script>

<div class="table-grid text-sm {$$props.class}">
  <div class="table-grid__header min-w-[400px] max-w-[600px]">{Object.entries(report).length} TASKS</div>
  <div class="table-grid__header">ASSIGNEE</div>
  <div class="table-grid__header">TASK ID</div>
  <div class="table-grid__header">TIME TRACKED</div>
  <div class="table-grid__header">TIME ESTIMATE</div>
  <div class="table-grid__header">ESTIMATIVE ERROR</div>
  <div class="table-grid__header">DUE DATE</div>
  <div class="table-grid__header">LAST LOG</div>
  <div class="table-grid__header">TO REVIEW</div>
  <div class="table-grid__header">TO TEST</div>

  <!-- Summary -->
  {#if showSummary}
    <TableSummary {report} />
  {/if}

  {#if showDetails}
    {#each Object.entries(report) as [id, entry]}
      <div class="table-grid__first-cell min-w-[400px] max-w-[600px] rounded-l-lg">
        {#if entry.task}
          <div
            class="w-2 h-2 rounded-sm mr-3 flex-shrink-0"
            title={entry.task.status.status}
            style="background-color: {entry.task.status.color};"
          />
        {:else}
          <div class="w-2 h-2 rounded-sm bg-transparent mr-3" />
        {/if}

        <div class="text-left py-2">
          <p class="font-semibold text-light-gray">
            {getProjectName(entry)}
          </p>
          <div>
            <span class="mr-2">{getTaskName(entry)}</span>
            {#if entry.task}
              {#each entry.task.tags as tag}
                <span
                  class="rounded-r-full px-2 py-[2px] text-xs font-semibold text-gray-700 mr-2 whitespace-nowrap"
                  style="background-color: {tag.tag_bg}; color: {getContrastColorHex(tag.tag_bg)}"
                >
                  {tag.name}
                </span>
              {/each}
            {/if}
            {#if entry.taskError}
              <p class="text-red-500">{entry.taskError}</p>
            {/if}
          </div>
        </div>
      </div>
      <div class="table-grid__cell">
        <div class="flex flex-row-reverse relative justify-center">
          {#each formatUserNamesSortedByParticipation(entry.timeEntry).split(',').reverse() as name}
            <div
              class="w-10 h-10 bg-lilac rounded-full flex items-center justify-center border-2 border-purple-gray-400 cursor-default font-semibold relative -ml-5"
              title={`${name} - ${getUserParticipation(entry.timeEntry, name)}`}
            >
              {getUserInitials(name)}
            </div>
          {/each}
        </div>
      </div>
      <div class="table-grid__cell">
        {#if entry.task}
          <a href={entry.task.url} target="_blank" title="ClickUp URL" class="hover:bg-dark-blue hover:rounded p-1"
            >#{id}</a
          >
        {:else}
          Flex
        {/if}
      </div>
      <div class="table-grid__cell">
        {#if entry.timeEntry?.length}
          <a
            href={clockifyUrl(dateRangeStart, dateRangeEnd, id)}
            target="_blank"
            title="Clockify URL"
            class="hover:bg-dark-blue hover:rounded p-1 text-center"
            >{formatDurationClock(sumDurations(entry.timeEntry))}</a
          >
        {/if}
      </div>
      <div class="table-grid__cell">
        <img src="./images/hourglass.svg" alt="hourglass" class="mr-2" />
        {formatDuration(entry.task?.time_estimate / 1000)}
      </div>
      <div class="table-grid__cell" class:text-red-300={calculateEstimationError(entry) > 2.5}>
        x {calculateEstimationError(entry)}
      </div>
      <div class="table-grid__cell">
        {#if entry.task?.due_date}
          <span title={new Date(Number(entry.task.due_date)).toString()}>{formatUnixDate(entry.task.due_date)}</span>
        {/if}
      </div>
      <div class="table-grid__cell">
        {#if entry.timeEntry?.length}
          <span title={new Date(entry.timeEntry[0]?.timeInterval?.end).toString()}
            >{formatDateDayMonth(entry.timeEntry[0]?.timeInterval?.end)}</span
          >
        {/if}
      </div>
      <div
        class="table-grid__cell"
        class:text-red-300={getTaskTimeStatus(entry.task?.timeStatus, 'to review') >= daysToMilis(3)}
      >
        {formatDurationOnlyDays(getTaskTimeStatus(entry.task?.timeStatus, 'to review'))}
      </div>
      <div
        class="table-grid__cell rounded-r-lg"
        class:text-red-300={getTaskTimeStatus(entry.task?.timeStatus, 'to test') >= daysToMilis(3)}
      >
        {formatDurationOnlyDays(getTaskTimeStatus(entry.task?.timeStatus, 'to test'))}
      </div>
    {/each}
  {/if}
</div>

<style>
  .table-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    row-gap: 10px;
  }

  .table-grid > div:first-child {
    @apply text-left;
  }

  .table-grid__header {
    @apply text-light-gray font-semibold text-center;
  }

  .table-grid__cell {
    @apply bg-purple-gray-400 px-5 min-h-[85px];
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-grid__first-cell {
    @apply bg-purple-gray-400 px-5 min-h-[85px];
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>
