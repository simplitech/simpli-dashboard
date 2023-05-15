<script>
  export let value
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

<input type="datetime-local" bind:value={output} class={$$props.class} />
