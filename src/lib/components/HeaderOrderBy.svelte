<script lang="ts">
  import type { OrderBy } from '$lib/utils/orderby'
  import { createEventDispatcher, onMount } from 'svelte'

  export let headerText = ''
  export let orderBy: OrderBy

  onMount(() => {
    if (orderBy == null) {
      orderBy = {
        asc: false,
        by: null,
      }
    }
  })

  $: isActive = () => {
    return orderBy && orderBy.by === headerText
  }

  const dispatch = createEventDispatcher()

  const orderColumn = () => {
    orderBy.asc = !orderBy.asc
    orderBy.by = headerText
    dispatch('orderBy', orderBy)
  }

  $: getHeaderClass = () => (isActive() ? 'block' : 'hidden group-hover:opacity-40 group-hover:block')
</script>

<button class="flex flex-row items-center justify-center gap-x-2 group {$$props.class}" on:click={orderColumn}>
  {headerText}
  <img
    src="./images/chevron.svg"
    alt="chevron icon"
    class={getHeaderClass()}
    class:rotate-180={orderBy && !orderBy.asc}
  />
</button>
