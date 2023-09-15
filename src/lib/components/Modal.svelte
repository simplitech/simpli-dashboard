<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import CloseIcon from '$lib/components/icons/CloseIcon.svelte'
  const dispatch = createEventDispatcher()

  export let title = ''
  export let body = ''
  export let width = 'w-full'
</script>

<!-- Main modal -->
<div>
  <div
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
  >
    <div class="relative {width} max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative rounded-lg shadow-md bg-purple-gray-300">
        <!-- Modal header -->
        <div class="flex items-center px-2 pt-2 justify-between">
          <h3 class="text-xl font-semibold text-white p-4">
            <slot name="title">{title}</slot>
          </h3>
          <button
            on:click={() => dispatch('close')}
            type="button"
            class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
          >
            <CloseIcon />
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="px-2">
          <slot>{body}</slot>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-900 bg-opacity-80 fixed inset-0 z-40" />
</div>
