<script lang="ts">
  import MdClose from 'svelte-icons/md/MdClose.svelte'

  export let filterItems: Record<string, boolean>

  function filter(chip: string) {
    filterItems[chip] = !filterItems[chip]
  }
</script>

<div class="grid grid-cols-2 gap-3 justify-around">
  {#each Object.keys(filterItems) as f}
    <span
      class="chip {filterItems[f]
        ? 'bg-gray-300 hover:filter-none hover:bg-gray-200'
        : 'variant-soft'}"
      on:click={() => {
        filter(f)
      }}
      on:keypress
    >
      <span class="capitalize text-sm font-medium">{f}</span>
      <span class="w-3 h-3 {filterItems[f] ? 'text-red-700' : 'text-white'}"
        ><MdClose /></span
      >
    </span>
  {/each}
</div>
