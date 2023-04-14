<script>
  import { onMount } from 'svelte'
  import {
    getTimeEntryReportDetailed,
    sumDurations,
    formatUserNamesSortedByParticipation,
  } from '$lib/clockifyServices.ts'
  import { clickupIdFromText, getTask } from '$lib/clickupServices.ts'
  import { getCacheItem, setCacheItem } from '$lib/cacheServices.ts'
  import DatetimeInput from '$lib/components/DatetimeInput.svelte'

  let report = null
  let loading = false

  let now = new Date()
  let dateRangeStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
  let dateRangeEnd = now

  onMount(async () => {
    await generateReport()
    console.log(report)
  })

  const generateReport = async () => {
    loading = true
    const clockifyData = await getTimeEntryReportDetailed({
      dateRangeStart: dateRangeStart.toISOString(),
      dateRangeEnd: dateRangeEnd.toISOString(),
      detailedFilter: { page: 0, pageSize: 1000 },
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
        const cache = await getCacheItem(`clickup-task-${id}`)
        if (cache) {
          resp[id].task = cache
          continue
        }

        try {
          const clickupTask = await getTask(id)
          resp[id].task = clickupTask
          setCacheItem(`clickup-task-${id}`, clickupTask)
        } catch (e) {
          resp[id].taskError = e.response.data.err
          if (e.response.data.err.includes('Rate limit')) {
            break
          }
        }
      }
      resp[id].timeEntry.push(clockifyEntry)
    }
    report = resp
    loading = false
  }

  const clockifyUrl = (description) => {
    return `https://app.clockify.me/reports/detailed?start=${dateRangeStart.toISOString()}&end=${dateRangeEnd.toISOString()}&description=${encodeURI(
      description,
    )}&page=1&pageSize=1000`
  }

  const durationRoundUpByHalfHour = (duration) => {
    if (!duration) {
      return 0
    }
    const minutes = Math.floor((duration - Math.floor(duration / 3600) * 3600) / 60)
    const minutesRounded = Math.ceil(minutes / 30) * 30
    return Math.floor(duration / 3600) * 3600 + minutesRounded * 60
  }

  const formatDuration = (duration) => {
    if (!duration) {
      return '--'
    }
    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor((duration - hours * 3600) / 60)
    const seconds = duration - hours * 3600 - minutes * 60

    let output = ''
    if (hours > 0) {
      output += `${hours}h `
    }
    if (minutes > 0) {
      output += `${minutes}m `
    }
    if (seconds > 0) {
      output += `${seconds}s`
    }
    return output.trim()
  }

  /**
   * gets white or black color to contrast with the given color
   * @param colorInRgbFormat color in the following format: rgb(123, 123, 123)
   * @returns {string|string}
   */
  const getContrastColor = (colorInRgbFormat) => {
    if (!colorInRgbFormat) {
      return 'black'
    }
    const rgb = colorInRgbFormat
      .replace('rgb(', '')
      .replace(')', '')
      .split(',')
      .map((x) => parseInt(x))
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
    return brightness > 125 ? 'black' : 'white'
  }
</script>

<h1 class="text-3xl font-bold p-2">Clockify and ClickUp</h1>
<form on:submit|preventDefault={generateReport} class="flex m-3">
  <label class="flex flex-col mr-3">
    <span class="font-bold">Start Date</span>
    <DatetimeInput bind:value={dateRangeStart} />
  </label>
  <label class="flex flex-col mr-3">
    <span class="font-bold">End Date</span>
    <DatetimeInput bind:value={dateRangeEnd} />
  </label>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
    Generate Report
  </button>
</form>

{#if loading}
  <p>Loading...</p>
{/if}
{#if report}
  <table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" class="p-3">Task ID</th>
        <th scope="col" class="p-3">Description</th>
        <th scope="col" class="p-3">Project</th>
        <th scope="col" class="p-3">Estimate</th>
        <th scope="col" class="p-3">Logged Roundup</th>
        <th scope="col" class="p-3">Logged</th>
        <th scope="col" class="p-3">First Log Date</th>
        <th scope="col" class="p-3">Last Log Date</th>
        <th scope="col" class="p-3">Tags</th>
        <th scope="col" class="p-3">Assignees</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.entries(report) as [id, entry]}
        <tr class="border-b dark:border-neutral-500">
          <td class="p-3 font-medium whitespace-nowrap">
            {entry.task ? id : 'Flex'}
            {#if entry.task}
              <a href={entry.task.url} target="_blank" class="text-blue-500 hover:text-blue-600">🔗</a>
            {/if}
          </td>
          <td class="p-3">
            <div class="w-64 whitespace-break-spaces">{entry.task?.name ?? id}</div>
            {#if entry.taskError}
              <div class="text-red-500">{entry.taskError}</div>
            {/if}
          </td>
          <td class="p-3">{entry.task?.list.name ?? entry.timeEntry?.[0]?.projectName ?? 'No project'}</td>
          <td class="p-3">{formatDuration(entry.task?.time_estimate / 1000)}</td>
          <td class="p-3">
            {formatDuration(durationRoundUpByHalfHour(sumDurations(entry.timeEntry)))}
          </td>
          <td class="p-3 flex whitespace-nowrap justify-between">
            <span>{formatDuration(sumDurations(entry.timeEntry))}</span>
            {#if entry.timeEntry?.length}
              <a href={clockifyUrl(id)} target="_blank">🔎</a>
            {/if}
          </td>
          <td class="p-3">
            {#if entry.timeEntry?.length}
              {entry.timeEntry[0]?.timeInterval?.start}
            {/if}
          </td>
          <td class="p-3">
            {#if entry.timeEntry?.length}
              {entry.timeEntry[entry.timeEntry.length - 1]?.timeInterval?.end}
            {/if}
          </td>
          <td class="p-3">
            {#if entry.task}
              <div class="w-64">
                {#each entry.task.tags as tag}
                  <span
                    class="rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    style="background-color: {tag.tag_bg}; color: {getContrastColor(tag.tag_bg)}"
                  >
                    {tag.name}
                  </span>
                {/each}
              </div>
            {/if}
          </td>
          <td class="p-3">
            {formatUserNamesSortedByParticipation(entry.timeEntry)}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
