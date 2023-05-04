<style>
  .grid-layout__filter {
    grid-column: 1 / 2;
    grid-row: 1 / 1;
  }
  @media only screen and (max-width: 1024px) {
    .grid-layout__filter {
      transform: translate(-150%, -7vh);
      position: absolute;
    }
  }
  .open-drawer {
    transform: translate(-1%, -7vh);
    position: sticky;
    top: 0;
  }
</style>

<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
  import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte'
  import ChipFilterAccordionSection from './ChipFilterAccordionSection.svelte'
  let nameFilter: Record<string, boolean> = {
    'A-Z': false,
    'Z-A': false
  }
  let authorFilter: Record<string, boolean> = {
    unic: false,
    multiplu: false
  }
  let contentFilter: Record<string, boolean> = {
    Fictiune: false,
    foo: false,
    bar: false,
    zoo: false
  }
  export let isDrawerOpen: boolean
  export let handleDrawerState: () => void
</script>

<div
  class="lg:w-full w-screen lg:block flex flex-col lg:h-[50%] z-50 bg-white h-screen grid-layout__filter transition-all"
  class:open-drawer={isDrawerOpen}
>
  <div
    class="self-end lg:hidden m-3 mt-14 w-8 h-8 lg:hidden border-gray-600 border-2 rounded cursor-pointer"
    on:click={handleDrawerState}
  >
    <MdChevronLeft />
  </div>

  <Accordion>
    <AccordionItem>
      <svelte:fragment slot="summary">Filtrează după nume</svelte:fragment>
      <svelte:fragment slot="content">
        <ChipFilterAccordionSection filterItems={nameFilter} />
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="summary">Filtrează după conținut</svelte:fragment>
      <svelte:fragment slot="content">
        <ChipFilterAccordionSection filterItems={contentFilter} />
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="summary">Filtrează după autor</svelte:fragment>
      <svelte:fragment slot="content">
        <ChipFilterAccordionSection filterItems={authorFilter} />
      </svelte:fragment>
    </AccordionItem>
  </Accordion>
</div>
