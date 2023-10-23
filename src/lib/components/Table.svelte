<script lang="ts">
  import {
    calculateDelay,
    getLastDueDate,
    getLastEstimative,
    getLastStatus,
    getTaskName,
    getTaskTimeStatus,
  } from '$lib/utils/clickupServices'
  import {
    calculateEstimationError,
    clockifyUrl,
    getUserParticipation,
    sortUserNameAndEmailByParticipation,
    sumDurations,
  } from '$lib/utils/clockifyServices'
  import {
    formatDurationOnlyDays,
    formatDateDayMonth,
    type Report,
    formatUnixDate,
    formatDuration,
    formatDurationClock,
    type Entry,
    formatDays,
  } from '$lib/utils/format'
  import { daysToMilis, getContrastColorHex } from '$lib/utils/helper'
  import TableSummary from '$lib/components/TableSummary.svelte'
  import MD5 from 'crypto-js/md5'
  import HeaderOrderBy from './HeaderOrderBy.svelte'
  import type { OrderBy } from '$lib/utils/orderby'

  export let report: Report
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let showSummary = true
  export let showDetails = true
  export let showWarnings = true
  export let orderBy: OrderBy

  function getProjectName(entry: Entry): string {
    return entry.task?.listLocation.name ?? entry.timeEntry?.[0]?.clockifyProject?.name ?? 'No project'
  }
</script>

<div class="table-grid text-sm {$$props.class}">
  <div class="table-grid__header min-w-[400px] max-w-[600px]">{Object.entries(report).length} TASKS</div>
  <div class="table-grid__header">ASSIGNEE</div>
  <div class="table-grid__header">TASK ID</div>
  <HeaderOrderBy on:orderBy {orderBy} headerText="TIME TRACKED" class="table-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="TIME ESTIMATE" class="table-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="ESTIMATIVE ERROR" class="table-grid__header" />
  <HeaderOrderBy on:orderBy {orderBy} headerText="DUE DATE" class="table-grid__header" />
  <div class="table-grid__header">DELAY</div>
  <HeaderOrderBy on:orderBy {orderBy} headerText="LAST LOG" class="table-grid__header" />
  <div class="table-grid__header">TO REVIEW</div>
  <div class="table-grid__header">TO TEST</div>

  <!-- Summary -->
  {#if showSummary}
    <TableSummary {report} />
  {/if}

  {#if showDetails || showWarnings}
    {#each Object.entries(report) as [id, entry]}
      <div class="table-grid__first-cell min-w-[400px] max-w-[600px] rounded-l-lg">
        {#if entry.task && entry.task.status}
          <div
            class="w-2 h-2 rounded-sm mr-3 flex-shrink-0"
            title={getLastStatus(entry.task.status)?.status}
            style="background-color: {getLastStatus(entry.task.status)?.status.color || '#c2c2c2'};"
          />
        {:else}
          <div class="w-2 h-2 rounded-sm bg-transparent mr-3" />
        {/if}

        <div class="text-left py-2">
          <p class="font-semibold text-gray-400">
            {getProjectName(entry)}
          </p>
          <div>
            <span class="mr-2">{getTaskName(entry)}</span>
            {#if entry.task}
              {#each entry.task.tags as tag}
                <span
                  class="rounded-r-full px-2 py-[2px] text-xs font-semibold text-gray-700 mr-2 whitespace-nowrap"
                  style="background-color: {tag.tagBg}; color: {getContrastColorHex(tag.tagBg)}"
                >
                  {tag.name}
                </span>
              {/each}
            {/if}
          </div>
        </div>
      </div>
      <div class="table-grid__cell">
        <div
          class="flex flex-row-reverse relative justify-center items-center"
          class:ml-5={sortUserNameAndEmailByParticipation(entry.timeEntry).length > 1}
        >
          {#each sortUserNameAndEmailByParticipation(entry.timeEntry).reverse() as user}
            <div
              class="flex items-center justify-center cursor-default font-semibold relative -ml-5 shrink-0"
              class:-ml-5={sortUserNameAndEmailByParticipation(entry.timeEntry).length > 1}
              title={`${user.name} - ${getUserParticipation(entry.timeEntry, user.name)}`}
            >
              <img
                src="https://www.gravatar.com/avatar/{MD5(user.email)}"
                class="w-10 h-10 bg-lilac rounded-full border-purple-gray-500 border-2"
                alt="user profile img"
              />
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
            href={clockifyUrl(dateRangeStart, dateRangeEnd, getTaskName(entry))}
            target="_blank"
            title="Clockify URL"
            class="hover:bg-dark-blue hover:rounded p-1 text-center"
            >{formatDurationClock(sumDurations(entry.timeEntry))}</a
          >
        {/if}
      </div>
      <div class="table-grid__cell">
        <img src="./images/hourglass.svg" alt="hourglass" class="mr-2" />
        {formatDuration(getLastEstimative(entry.task?.timeEstimates)?.estimate / 1000)}
      </div>
      <div class="table-grid__cell" class:text-red-300={calculateEstimationError(entry) > 2.5}>
        x {calculateEstimationError(entry)}
      </div>
      <div class="table-grid__cell">
        {#if getLastDueDate(entry.task?.dueDates)?.dueDate}
          <span title={new Date(Number(getLastDueDate(entry.task?.dueDates)?.dueDate)).toString()}
            >{formatUnixDate(getLastDueDate(entry.task?.dueDates)?.dueDate)}</span
          >
        {/if}
      </div>
      <div class="table-grid__cell">
        {#if entry.task}
          <div
            class:text-green-500={calculateDelay(entry.task) < 0}
            class:text-red-500={calculateDelay(entry.task) >= 2}
          >
            {formatDays(calculateDelay(entry.task))}
          </div>
        {/if}
      </div>
      <div class="table-grid__cell">
        {#if entry.timeEntry?.length}
          <span title={new Date(entry.timeEntry[0]?.end).toString()}>{formatDateDayMonth(entry.timeEntry[0]?.end)}</span
          >
        {/if}
      </div>
      <div
        class="table-grid__cell"
        class:text-red-300={getTaskTimeStatus(entry.task?.status, 'to review') >= daysToMilis(3)}
      >
        {formatDurationOnlyDays(getTaskTimeStatus(entry.task?.status, 'to review'))}
      </div>
      <div
        class="table-grid__cell rounded-r-lg"
        class:text-red-300={getTaskTimeStatus(entry.task?.status, 'to test') >= daysToMilis(3)}
      >
        {formatDurationOnlyDays(getTaskTimeStatus(entry.task?.status, 'to test'))}
      </div>
    {/each}
  {/if}
</div>

<style>
  .table-grid {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    row-gap: 10px;
  }

  .table-grid > div:first-child {
    @apply text-left;
  }

  :global(.table-grid__header) {
    @apply text-gray-400 font-semibold text-center;
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
