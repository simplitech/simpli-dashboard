<script lang="ts">
  import { type Entry, formatDateDayMonth, formatDateHourMinuteSec } from '$lib/utils/format'
  import type { ClockifyTimeEntry } from '../../graphql/generated'
  import { getLastLogDate } from '$lib/utils/clockifyServices'

  export let selectedEntryForNotes: Entry

  function startTimeComparator(a: ClockifyTimeEntry, b: ClockifyTimeEntry): number {
    const startA = new Date(a.start).getTime()
    const startB = new Date(b.start).getTime()

    // ascending
    return startA - startB
  }
</script>

<div class="grid grid-cols-1 gap-2 text-sm w-full p-4">
  {#each selectedEntryForNotes.timeEntry.filter((it) => it.note).sort(startTimeComparator) as entry}
    <div class="bg-purple-gray-400 flex justify-center items-center px-4 min-h-[60px] rounded-lg w-full">
      <div class="px-4">{entry.clockifyUser.name}</div>
      <div class="flex justify-center items-start px-4 flex-col">
        <span title={new Date(getLastLogDate(entry)).toString()}>
          {formatDateDayMonth(getLastLogDate(entry))}
        </span>
        <span title={new Date(getLastLogDate(entry)).toString()}>
          {formatDateHourMinuteSec(getLastLogDate(entry))}
        </span>
      </div>
      <div class="px-4 flex-grow">{entry.note}</div>
    </div>
  {/each}
</div>
