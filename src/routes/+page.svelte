<script>
  import { onMount } from 'svelte'
  import { getTimeEntryReportDetailed, formatDuration, sumDurations } from '$lib/clockifyServices.ts'
  import { clickupIdFromText, getTask } from '$lib/clickupServices.ts'

  let report = null

  let dateRangeStart = '2023-04-10T00:00:00.000Z'
  let dateRangeEnd = '2023-04-13T23:59:59.999Z'

  onMount(async () => {
    const clockifyData = await getTimeEntryReportDetailed({
      dateRangeStart: '2023-04-10T00:00:00.000Z',
      dateRangeEnd: '2023-04-13T23:59:59.999Z',
      detailedFilter: { page: 0 },
    })
    const resp = {}
    for (const clockifyEntry of clockifyData.timeentries) {
      let id = clickupIdFromText(clockifyEntry.description)
      const idFound = Boolean(id)
      id = id || clockifyEntry.description

      if (!resp[id]) {
        resp[id] = { timeEntry: [], task: null }
      }
      if (idFound && !resp[id].task) {
        resp[id].task = await getTask(id)
      }
      resp[id].timeEntry.push(clockifyEntry)
    }
    report = resp
    console.log(report)
  })

  const openTimeEntry = (description) => {
    window.open(
      `https://app.clockify.me/reports/detailed?start=${dateRangeStart}&end=${dateRangeEnd}&description=${encodeURI(
        description,
      )}&page=1&pageSize=50`,
      '_blank',
    )
  }
</script>

<h1 class="text-3xl font-bold">Simpli Dashboard</h1>
<h2>Clockify Time Entry Report</h2>
{#if !report}
  <p>Loading...</p>
{:else}
  <table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" class="px-6 py-4">Task ID</th>
        <th scope="col" class="px-6 py-4">Description</th>
        <th scope="col" class="px-6 py-4">Project</th>
        <th scope="col" class="px-6 py-4">Estimate</th>
        <th scope="col" class="px-6 py-4">Logged</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.entries(report) as [id, entry]}
        <tr class="border-b dark:border-neutral-500">
          <td class="whitespace-nowrap px-6 py-4 font-medium">
            {entry.task ? id : 'Flex'}
            {#if entry.task}
              <a href={entry.task.url} target="_blank" class="text-blue-500 hover:text-blue-600">🔗</a>
            {/if}
          </td>
          <td class="whitespace-nowrap px-6 py-4">{entry.task?.name ?? id}</td>
          <td class="whitespace-nowrap px-6 py-4">{entry.task?.list.name ?? entry.timeentries?.[0]?.projectName}</td>
          <td class="whitespace-nowrap px-6 py-4">{formatDuration(entry.task?.time_estimate / 1000)}</td>
          <td class="whitespace-nowrap px-6 py-4">
            {formatDuration(sumDurations(entry.timeEntry))}
            {#if entry.timeEntry?.length}
              <a on:click={openTimeEntry(entry.timeentries?.[0]?.description)}>🔎</a>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
