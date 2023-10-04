<script lang="ts">
  import Popover from './Popover.svelte'
  import { type Report, formatReport, type Entry } from '$lib/utils/format'
  import { copyToClipboard } from '$lib/utils/helper'
  import { onMount } from 'svelte'
  import FolderIcon from './icons/FolderIcon.svelte'

  export let dateRangeEnd: Date
  export let dateRangeStart: Date
  export let report: Report

  let selectedItems: string[] = []
  let isOpen = false

  onMount(() => {
    if (localStorage.getItem('exportFields') != null) {
      selectedItems = JSON.parse(localStorage.getItem('exportFields'))
      selectedItems = selectedItems.filter((item) => Object.keys(formatReport).includes(item))
    } else {
      selectedItems = Object.keys(formatReport)
    }
  })

  const copyReportToClipboard = (
    report: Report,
    format: Record<string, (id: string, entry: Entry, dateRangeStart: Date, dateRangeEnd: Date) => string>,
    selectedItems: string[],
  ) => {
    selectedItems.sort((a, b) => {
      const indexA = Object.keys(formatReport).indexOf(a)
      const indexB = Object.keys(formatReport).indexOf(b)
      return indexA - indexB
    })

    let headers = selectedItems.join('\t') + '\n'
    let rows = ''

    Object.entries(report).forEach(([id, entry]) => {
      selectedItems.forEach((selectedItem: string) => {
        rows += format[selectedItem](id, entry, dateRangeStart, dateRangeEnd)
        rows += '\t'
      })
      rows += '\n'
    })

    localStorage.setItem('exportFields', JSON.stringify(selectedItems))

    copyToClipboard(headers + rows, 'Successfully exported to Excel')

    isOpen = false
  }

  $: isChecked = (item: string) => {
    return selectedItems.includes(item)
  }

  function handleCheckboxChange(event: Event, item: string) {
    if ((event.target as HTMLInputElement).checked) {
      selectedItems.push(item)
    } else {
      selectedItems = selectedItems.filter((selectedItem) => selectedItem !== item)
    }
  }
</script>

<Popover bind:isOpen contentClass="right-0">
  <div
    slot="button"
    class="flex flex-row items-center justify-center border rounded-full py-2 px-5 whitespace-nowrap"
    class:border-white={!isOpen}
    class:border-lilac={isOpen}
  >
    <FolderIcon class={isOpen ? 'mr-2 fill-lilac' : 'mr-2 fill-gray-300'} />
    Copy Data to Clipboard
  </div>
  <div slot="content" class="w-[512px] bg-purple-gray-300 rounded p-3 flex flex-col gap-y-3">
    <div class="flex flex-row gap-x-2 items-center font-bold">
      <img src="/images/xlsx.svg" class="w-4 h-4" alt="icon export to xlsx" />
      Fields to Export
    </div>
    <hr class="border-gray-500" />
    <div class="grid grid-cols-2 gap-y-3 py-2">
      {#each Object.keys(formatReport) as key}
        <label class="flex flex-row gap-x-1 items-center cursor-pointer">
          <input
            type="checkbox"
            class="checkbox"
            checked={isChecked(key)}
            on:change={(event) => handleCheckboxChange(event, key)}
          />
          {key}
        </label>
      {/each}
    </div>
    <hr class="border-gray-500" />
    <button
      class="self-end bg-lilac text-white font-bold py-2 px-8 rounded-full flex flex-row items-center whitespace-nowrap"
      on:click={() => copyReportToClipboard(report, formatReport, selectedItems)}>Export</button
    >
  </div>
</Popover>
