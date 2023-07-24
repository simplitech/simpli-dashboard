<script lang="ts">
  export let value
  export let disabled = false

  let output
  let inF = (date) => {
    const newDate = date ? new Date(date) : new Date()
    output = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString().slice(0, -1)
  }
  let outF = (text) => {
    const date = new Date(text)
    if (!isNaN(date.getTime())) {
      value = new Date(text)
    }
  }

  $: inF(value)
  $: outF(output)
</script>

<input type="datetime-local" bind:value={output} {disabled} class={$$props.class} />

<style>
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  input:disabled {
    @apply opacity-70;
  }
</style>
