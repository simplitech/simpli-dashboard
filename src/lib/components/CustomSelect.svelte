<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { fly, slide } from 'svelte/transition'
  import { capitalizeFirstLetter, type FilterOptions } from '$lib/utils/format'
  import { getContrastColorHex, clickOutside } from '$lib/utils/helper'
  import CloseIcon from './icons/CloseIcon.svelte'

  export let title = ''
  export let placeholder = ''
  export let items: FilterOptions[]
  export let selectedItems: FilterOptions[] = []
  export let showSearch = true
  export let buttonClass = ''

  $: filteredItems = items
  let isOpen = false
  let searchValue = ''
  let isSearching = false

  const dispatch = createEventDispatcher()

  $: isChecked = (item: FilterOptions): boolean => {
    return selectedItems.some((selectedItem: FilterOptions) => selectedItem.label === item.label)
  }

  function handleCheckboxChange(event: Event, item: FilterOptions) {
    if ((event.target as HTMLInputElement).checked) {
      selectedItems = [...selectedItems, item]
    } else {
      selectedItems = selectedItems.filter((selectedItem) => selectedItem.label !== item.label)
    }

    dispatch('filter')
  }

  $: isSelectAllChecked = () => {
    return items.every((item: FilterOptions) => selectedItems.some((selectedItem) => selectedItem.label === item.label))
  }

  function handleSelectAll(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      selectedItems = items
    } else {
      selectedItems = []
    }

    dispatch('filter')
  }

  function searchAssignees() {
    filteredItems = items
    filteredItems = filteredItems.filter((item: FilterOptions) =>
      item.label.toLowerCase().includes(searchValue.toLowerCase()),
    )

    isSearching = !!searchValue
  }

  function handleClear() {
    searchValue = ''
    searchAssignees()
  }

  function hasColor() {
    return items.some((item) => !!item.color)
  }

  function handleClick() {
    isOpen = !isOpen
  }
</script>

<div class="relative {$$props.class} custom-scrollbar">
  <button
    id="filter-button"
    class="flex flex-row items-center {buttonClass}"
    on:click|stopPropagation={() => handleClick()}
  >
    <span class="mr-2" class:font-bold={isOpen}>{title}</span>
    <img src="./images/chevron.svg" alt="chevron icon" />
  </button>
  {#if !isOpen && selectedItems.length}
    <div class="absolute bottom-5 right-0" transition:fly>
      <div class="flex flex-row-reverse relative justify-center items-center">
        {#if selectedItems.length > 1 || !hasColor()}
          <div
            class:bg-gray-400={!isSelectAllChecked()}
            class:bg-lilac={isSelectAllChecked()}
            class:-ml-[22px]={selectedItems.length > 1 && hasColor()}
            class="h-[18px] w-[18px] rounded text-[10px] font-bold flex items-center justify-center p-1 border border-purple-gray-500"
          >
            {selectedItems.length}
          </div>
        {/if}
        {#each selectedItems as item}
          {#if item.color && !isSelectAllChecked()}
            <div
              class="h-[18px] w-[18px] rounded text-[10px] font-bold flex items-center justify-center p-1 border border-purple-gray-500"
              style="background-color: {item.color}"
              class:-ml-[22px]={selectedItems.length > 1}
            >
              {#if selectedItems.length === 1}
                <span style="color: {getContrastColorHex(item.color)}">{selectedItems.length}</span>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
  {#if isOpen}
    <div
      class="w-[219px] absolute bg-purple-gray-300 top-6 left-0 py-3 px-2 rounded-md flex flex-col space-y-3 z-[5] max-h-[500px] overflow-y-auto"
      transition:slide
      use:clickOutside={'#filter-button'}
      on:click_outside={() => handleClick()}
    >
      {#if showSearch}
        <form on:input|preventDefault={searchAssignees} class="flex">
          <input
            type="text"
            class="w-full h-5 text-white p-4 rounded-full bg-purple-gray-400 border border-gray-400 focus:outline-none focus:border-lilac focus:border-2"
            {placeholder}
            bind:value={searchValue}
          />
          {#if !searchValue}
            <button type="submit" class="-ml-7">
              <img src="./images/search.svg" alt="search icon" class="w-4 h-4" />
            </button>
          {:else}
            <button class="-ml-7" on:click={() => handleClear()}>
              <CloseIcon />
            </button>
          {/if}
        </form>
        <hr class="border-gray-400" />
      {/if}
      {#if isSearching}
        <div class="flex items-center text-sm">
          Results: {filteredItems.length}
        </div>
      {:else}
        <div class="flex items-center text-sm">
          <label class="flex items-center cursor-pointer">
            <input
              type="checkbox"
              class="checkbox"
              checked={isSelectAllChecked()}
              on:change={(event) => handleSelectAll(event)}
            />
            Select All
          </label>
        </div>
      {/if}
      <hr class="border-gray-400" />

      <div class="flex flex-col space-y-3">
        {#each filteredItems as item}
          <div class="flex items-center text-sm">
            <label class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="checkbox"
                checked={isChecked(item)}
                on:change={(event) => handleCheckboxChange(event, item)}
              />
              {capitalizeFirstLetter(item.label)}
              {#if item.color}
                <div class="w-2 h-2 ml-2 rounded-sm" style="background-color: {item.color}" />
              {/if}
            </label>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .custom-scrollbar {
    /* width */
    ::-webkit-scrollbar {
      @apply w-1;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      @apply bg-lilac rounded;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: bg-lilac;
    }
  }
</style>
