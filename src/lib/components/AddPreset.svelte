<script lang="ts">
  import type { FilterPreset, Filters } from '$lib/utils/format'
  import { showToast } from '$lib/utils/toast'
  import Popover from './Popover.svelte'

  export let selectedFilters: Filters

  let presetName: string | null = null
  let isOpen = false

  const savePreset = () => {
    const preset = { name: presetName, ...selectedFilters } as FilterPreset

    let currentPresets = JSON.parse(localStorage.getItem('presets'))

    if (currentPresets) {
      currentPresets = [...currentPresets, preset]
      localStorage.setItem('presets', JSON.stringify(currentPresets))
    } else {
      localStorage.setItem('presets', JSON.stringify([preset]))
    }

    showToast('Filter preset successfully saved')

    isOpen = false
  }
</script>

<Popover bind:isOpen>
  <div
    class="bg-lilac text-white font-bold py-2 px-4 rounded-full flex flex-row items-center whitespace-nowrap"
    slot="button"
  >
    Save filter preset
    <img src="./images/filter.svg" alt="filter icon" class="ml-2" />
  </div>
  <div class="w-[228px] bg-purple-gray-300 flex flex-col gap-y-2 rounded-md py-3 px-2" slot="content">
    <input
      type="text"
      class="w-full h-5 text-white italic p-4 rounded-full bg-purple-gray-400 border border-gray-400 focus:outline-none focus:border-lilac focus:border-2"
      placeholder="Name of your preset"
      bind:value={presetName}
    />
    <hr class="border-gray-500" />
    <button
      class="bg-lilac text-white font-bold py-1 px-4 rounded-full flex flex-row items-center w-fit self-end"
      on:click={savePreset}
    >
      Save preset
    </button>
  </div>
</Popover>
