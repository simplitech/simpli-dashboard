<script lang="ts">
  import { getTaskTimeStatus } from '../clickupServices'
  import {
    calculateEstimationError,
    clockifyUrl,
    formatUserNamesSortedByParticipation,
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
  } from '../format'
  import { daysToMilis, getContrastColorHex } from '../helper'

  export let report: Report
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
</script>

<div class="table-grid text-sm {$$props.class}">
  <div class="table-grid__header">{Object.entries(report).length} TASKS</div>
  <div class="table-grid__header">ASSIGNEE</div>
  <div class="table-grid__header">TASK ID</div>
  <div class="table-grid__header">TIME TRACKED</div>
  <div class="table-grid__header">TIME ESTIMATE</div>
  <div class="table-grid__header">ESTIMATIVE ERROR</div>
  <div class="table-grid__header">DUE DATE</div>
  <div class="table-grid__header">LAST LOG</div>
  <div class="table-grid__header">TO REVIEW</div>
  <div class="table-grid__header">TO TEST</div>

  {#each Object.entries(report) as [id, entry]}
    <div class="table-grid__first-row rounded-l-lg">
      {#if entry.task}
        <div
          class="w-2 h-2 rounded-sm mr-3"
          title={entry.task.status.status}
          style="background-color: {entry.task.status.color};"
        />
      {:else}
        <div class="w-2 h-2 rounded-sm bg-transparent mr-3" />
      {/if}

      <div class="text-left">
        <p class="font-semibold text-light-gray">
          {entry.task?.list.name ?? entry.timeEntry?.[0]?.projectName ?? 'No project'}
        </p>
        <div>
          <span class="mr-2">{entry.task?.name ?? id}</span>
          {#if entry.task}
            {#each entry.task.tags as tag}
              <span
                class="rounded-r-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 whitespace-nowrap"
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
    <div class="table-grid__row">
      <div class="flex flex-row justify-center">
        {#each formatUserNamesSortedByParticipation(entry.timeEntry).split(',') as name, i}
          <div
            class="w-10 h-10 bg-lilac rounded-full flex items-center justify-center border-2 border-dark-purple cursor-default font-semibold"
            title={name}
            class:-ml-5={i > 0}
          >
            {getUserInitials(name)}
          </div>
        {/each}
      </div>
    </div>
    <div class="table-grid__row">
      {#if entry.task}
        <a href={entry.task.url} target="_blank" title="ClickUp URL" class="hover:bg-dark-blue hover:rounded p-1"
          >#{id}</a
        >
      {:else}
        Flex
      {/if}
    </div>
    <div class="table-grid__row">
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
    <div class="table-grid__row">
      <img src="/images/hourglass.svg" alt="hourglass" class="mr-2" />
      {formatDuration(entry.task?.time_estimate / 1000)}
    </div>
    <div class="table-grid__row" class:text-red-300={calculateEstimationError(entry) > 2.5}>
      x {calculateEstimationError(entry)}
    </div>
    <div class="table-grid__row">
      {#if entry.task?.due_date}
        {formatUnixDate(entry.task.due_date)}
      {/if}
    </div>
    <div class="table-grid__row">
      {#if entry.timeEntry?.length}
        {formatDateDayMonth(entry.timeEntry[entry.timeEntry.length - 1]?.timeInterval?.end)}
      {/if}
    </div>
    <div
      class="table-grid__row"
      class:text-red-300={getTaskTimeStatus(entry.task?.timeStatus, 'to review') >= daysToMilis(3)}
    >
      {formatDurationOnlyDays(getTaskTimeStatus(entry.task?.timeStatus, 'to review'))}
    </div>
    <div
      class="table-grid__row rounded-r-lg"
      class:text-red-300={getTaskTimeStatus(entry.task?.timeStatus, 'to test') >= daysToMilis(3)}
    >
      {formatDurationOnlyDays(getTaskTimeStatus(entry.task?.timeStatus, 'to test'))}
    </div>
  {/each}
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

  .table-grid__row {
    @apply bg-purple-gray px-5 h-[85px];
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-grid__first-row {
    @apply bg-purple-gray px-5 h-[85px];
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 700px;
  }
</style>
