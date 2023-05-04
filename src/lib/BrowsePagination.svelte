<style>
  .grid-layout__header {
    grid-column: 2 / span 4;
    grid-row: 1/1;
  }
  .rotate-arrow-180 > :global(svg) {
    rotate: 180deg;
  }
  .transition-arrow > :global(svg) {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  @media only screen and (max-width: 1024px) {
    .grid-layout__header {
      grid-column: 1 / span 5;
    }
  }
</style>

<script lang="ts">
  import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte'
  import MdChevronRight from 'svelte-icons/md/MdChevronRight.svelte'

  export let handleDrawerState: () => void
  export let isDrawerOpen: boolean
</script>

<div class="flex grid-layout__header flex-row justify-between lg:justify-end w-full">
  <div
    on:click={handleDrawerState}
    class="w-8 transition-arrow h-8 lg:hidden border-gray-600 transition-all border-2 rounded transition-all cursor-pointer"
    class:rotate-arrow-180={isDrawerOpen}
  >
    <MdChevronRight />
  </div>
  <div class="flex flex-row lg:self-end">
    <div class="w-8 cursor-pointer">
      <MdChevronLeft />
    </div>
    <li class="flex flex-row items-center">
      <ul class="px-1 h-8 text-xl cursor-pointer underline">1</ul>
      <ul class="px-1 h-8 text-xl cursor-pointer">2</ul>
      <ul class="px-1 h-8 text-xl cursor-pointer">3</ul>
    </li>
    <div class="w-8 cursor-pointer">
      <MdChevronRight />
    </div>
  </div>
</div>
