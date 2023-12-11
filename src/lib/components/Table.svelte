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
    getLastLogDate,
    getLastTimeEntry,
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
  import HeaderOrderBy from './HeaderOrderBy.svelte'
  import type { OrderBy } from '$lib/utils/orderby'
  import ClockifyTag from './ClockifyTag.svelte'
  import UserIcon from './UserIcon.svelte'
  import { usersOverview } from '$lib/utils/store'

  export let report: Report
  export let dateRangeStart: Date
  export let dateRangeEnd: Date
  export let showSummary = true
  export let showDetails = true
  export let showWarnings = true
  export let orderBy: OrderBy

  $: highlightedIndex = {
    userIndex: -1,
    entryIndex: -1,
  }

  function handleMouseOver(userIndex: number, entryIndex: number) {
    highlightedIndex = {
      userIndex,
      entryIndex,
    }
  }

  function handleMouseOut() {
    highlightedIndex = {
      userIndex: -1,
      entryIndex: -1,
    }
  }

  function getProjectName(entry: Entry): string {
    return entry.task?.listLocation.name ?? entry.timeEntry?.[0]?.clockifyProject?.name ?? 'No project'
  }

  function getUserOverview(email: string) {
    return $usersOverview[email]
  }

  $: shouldShowChart = (userIndex: number, entryIndex: number, length: number) => {
    const isCurrentEntryBeingFocused = highlightedIndex.entryIndex === entryIndex

    if (!isCurrentEntryBeingFocused) return length - 1 === userIndex

    const nothingFocused = highlightedIndex.userIndex === -1

    if (nothingFocused) {
      return nothingFocused && length - 1 === userIndex
    }

    return highlightedIndex.userIndex === userIndex || (length - 1 === userIndex && nothingFocused)
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
    {#each Object.entries(report) as [id, entry], entryIndex}
      <div class="table-grid__first-cell min-w-[400px] max-w-[600px] rounded-l-lg">
        {#if entry.task && entry.task.status}
          <div
            class="w-2 h-2 rounded-sm mr-3 flex-shrink-0"
            title={getLastStatus(entry.task.status)?.statusName}
            style="background-color: {getLastStatus(entry.task.status)?.statusColor || '#c2c2c2'};"
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
          {#if getLastTimeEntry(entry).currentlyRunning}
            <div class="mt-2">
              {#if getLastTimeEntry(entry).tags.length}
                {#each getLastTimeEntry(entry).tags as tag}
                  <ClockifyTag tagText={tag.clockifyTag.name} />
                {/each}
              {:else}
                <ClockifyTag />
              {/if}
            </div>
          {/if}
        </div>
      </div>
      <div class="table-grid__cell">
        <div
          class="flex flex-row-reverse relative justify-center items-center isolate"
          class:ml-5={sortUserNameAndEmailByParticipation(entry.timeEntry).length > 1}
        >
          {#each sortUserNameAndEmailByParticipation(entry.timeEntry).reverse() as user, userIndex}
            <div
              class="flex items-center justify-center cursor-default font-semibold relative -ml-7 shrink-0"
              class:-ml-7={sortUserNameAndEmailByParticipation(entry.timeEntry).length > 1}
              title={`${user.name} - ${getUserParticipation(entry.timeEntry, user.name)}`}
              on:mouseover={() => handleMouseOver(userIndex, entryIndex)}
              on:mouseout={handleMouseOut}
              on:focus={() => handleMouseOver(userIndex, entryIndex)}
              on:blur={handleMouseOut}
              role="tooltip"
            >
              <UserIcon
                userOverview={getUserOverview(user.email)}
                isMultiple={sortUserNameAndEmailByParticipation(entry.timeEntry).length > 1}
                isFocused={highlightedIndex.userIndex === userIndex ||
                  sortUserNameAndEmailByParticipation(entry.timeEntry).length === 1}
                isSameEntry={highlightedIndex.entryIndex === entryIndex}
                showChart={shouldShowChart(
                  userIndex,
                  entryIndex,
                  sortUserNameAndEmailByParticipation(entry.timeEntry).length,
                )}
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
          <span title={new Date(getLastLogDate(getLastTimeEntry(entry))).toString()}
            >{formatDateDayMonth(getLastLogDate(getLastTimeEntry(entry)))}</span
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
