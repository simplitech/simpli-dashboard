<script lang="ts">
  import { clickOutside } from '$lib/utils/helper'

  export let isOpen = false
  export let contentClass = ''
</script>

<div class="relative">
  <button id="popover-button" on:click={() => (isOpen = !isOpen)}>
    <slot name="button" />
  </button>
  {#if isOpen}
    <div
      class="absolute top-10 z-[5] {contentClass}"
      use:clickOutside={'#popover-button'}
      on:click_outside={() => (isOpen = !isOpen)}
    >
      <slot name="content" />
    </div>
  {/if}
</div>
