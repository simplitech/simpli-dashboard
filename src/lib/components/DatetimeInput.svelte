<script lang="ts">
  export let value: Date
  export let disabled = false

  let output: string
  let inF = (date: Date | string) => {
    const newDate = date ? new Date(date) : new Date()
    output = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString().slice(0, -1)
  }
  let outF = (text: string) => {
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
  /* Changes the color of the calendar icon to white */
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  input:disabled {
    @apply opacity-70;
  }
</style>
