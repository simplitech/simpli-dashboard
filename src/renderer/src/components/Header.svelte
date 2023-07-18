<script lang="ts">
  import DatetimeInput from './DatetimeInput.svelte'
  import { createEventDispatcher } from 'svelte'
  import { version } from '../../../../package.json'

  export let dateRangeEnd: Date
  export let dateRangeStart: Date

  let searchValue = null
  const dispatch = createEventDispatcher()

  const generateReport = () => {
    dispatch('generate', {
      dateRangeStart: dateRangeStart,
      dateRangeEnd: dateRangeEnd,
    })
  }

  const openConfigModal = () => {
    dispatch('openConfigModal')
  }

  const search = () => {
    dispatch('search', {
      searchValue: searchValue,
    })
  }
</script>

<div class="bg-dark-purple rounded-full flex items-center justify-between py-4 px-8 text-sm {$$props.class}">
  <div class="flex flex-row items-center justify-center">
    <div class="flex flex-row mr-5">
      <img src="/images/logo.svg" alt="clickclock logo" class="mr-2" />
      <span class="text-2xl font-extrabold">ClickClock</span>
    </div>

    <div class="w-[2px] h-9 bg-dark-gray mr-5" />

    <form class="flex flex-row items-center mr-10" on:submit|preventDefault={search}>
      <input
        type="text"
        class="w-96 h-10 text-white p-4 rounded-full bg-transparent border border-white focus:outline-none"
        placeholder="ID or Description"
        bind:value={searchValue}
      />
      <button type="submit" class="-ml-8">
        <img src="/images/search.svg" alt="search icon" class="w-4 h-4" />
      </button>
    </form>

    <form on:submit|preventDefault={generateReport} class="flex items-center">
      <DatetimeInput
        bind:value={dateRangeStart}
        class="bg-transparent border rounded-full border-lilac flex items-center justify-center p-2 text-white"
      />

      <span class="mx-5">to</span>

      <DatetimeInput
        bind:value={dateRangeEnd}
        class="bg-transparent border rounded-full border-lilac flex items-center justify-center p-2 mr-5"
      />

      <button
        class="bg-lilac text-white font-bold py-2 px-8 rounded-full flex flex-row items-center whitespace-nowrap"
        type="submit"
      >
        <img class="mr-2" src="/images/reverse.svg" alt="reverse icon" />
        Fetch Data
      </button>
    </form>
  </div>

  <div class="flex flex-row items-center justify-center">
    <div class="w-[2px] h-9 bg-dark-gray mx-5" />

    <div class="text-light-gray font-normal text-xs p-5">
      <span>v.{version}</span>
    </div>
    <button on:click={openConfigModal}>
      <img src="/images/settings.svg" alt="settings icon" />
    </button>
  </div>
</div>
