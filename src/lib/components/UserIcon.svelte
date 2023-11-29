<script lang="ts">
  import type { UserOverview } from '$lib/types/UserOverview'
  import MD5 from 'crypto-js/md5'
  import { Chart, type EChartsOptions } from 'svelte-echarts'

  export let isMultiple = false
  export let isFocused = false
  export let isSameEntry = false
  export let showChart = false
  export let isOnline = false
  export let userOverview: UserOverview

  const options: EChartsOptions = {
    animation: false,
    series: [
      {
        name: 'User Data',
        type: 'pie',
        radius: ['90%', '98%'],
        silent: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: 'transparent',
          borderWidth: 10,
        },
        label: {
          show: false,
        },
        data: [
          { value: userOverview?.issuesTodo ?? 0, name: 'To Do' },
          { value: userOverview?.issuesInProgress ?? 0, name: 'In Progress' },
          { value: userOverview?.issuesOverdue ?? 0, name: 'Overdue' },
          { value: userOverview?.issuesTodoWithPriority ?? 0, name: 'To Do with Priority' },
          { value: userOverview?.issuesToReview ?? 0, name: 'Reviewer' },
          { value: userOverview?.issuesToTest ?? 0, name: 'Tester' },
        ],
        color: ['#FE0320', '#04AAFA', '#A50451', '#FE7A02', '#90A9FF', '#FFFBA5'],
      },
    ],
  }
</script>

<div
  class="w-[55px] h-[55px] relative rounded-full z-[2]"
  class:bg-purple-gray-300={showChart && isSameEntry}
  class:opacity-25={isMultiple && isSameEntry && !isFocused}
>
  <img
    src={`https://www.gravatar.com/avatar/${MD5(userOverview?.email)}`}
    alt="user icon"
    class="rounded-full w-[90%] absolute top-[5%] left-[5%] border-purple-gray-300 border-2 z-[1]"
  />
  {#if !isMultiple || showChart}
    <div
      class="rounded-full h-[12px] w-[12px] absolute top-0.8 right-1.5 z-[10] border border-black"
      class:bg-green-500={isOnline}
      class:bg-gray-300={!isOnline}
    />
    <div class="w-[55px] h-[55px] relative" class:z-2={showChart}>
      <Chart {options} />
    </div>
  {/if}
</div>
