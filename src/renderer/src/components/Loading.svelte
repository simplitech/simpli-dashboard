<script lang="ts">
  export let loadingOrigin: string
  export let loadingText: string
</script>

<div class="flex flex-row items-center justify-center text-xl my-10">
  <img src="/images/loading.svg" alt="loading" class="w-10 h-10 mr-5" />
  <p class="mr-4 font-bold">Loading:</p>
  <p class="px-2 bg-dark-gray text-light-gray text-base rounded-full">
    <span class="font-bold">{loadingOrigin}</span> - {loadingText}
  </p>
</div>
