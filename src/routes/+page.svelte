<script>
  import { onMount } from 'svelte'
  import { getTimeEntryReportDetailed } from '$lib/clockifyServices.ts'

  let clockifyData = null

  onMount(async () => {
    clockifyData = await getTimeEntryReportDetailed({
      dateRangeStart: '2023-04-10T00:00:00.000Z',
      dateRangeEnd: '2023-04-13T23:59:59.999Z',
      detailedFilter: { page: 0 },
    })
    console.log(clockifyData)
  })
</script>

<h1 class="text-3xl font-bold">Simpli Dashboard</h1>
<h2>Clockify Time Entry Report</h2>
Total Time: {clockifyData?.totals?.[0]?.totalTime}
