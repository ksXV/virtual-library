<style>
  .grid-layout {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 35px 1fr;
  }
  .grid-layout__items {
    grid-column: 2 / span 4;
    grid-row-start: 2;
  }

  @media only screen and (max-width: 1024px) {
    .grid-layout__items {
      grid-column: 1 / span 5;
    }
  }
</style>

<script lang="ts">
  import BrowsePagination from '$lib/BrowsePagination.svelte'
  import Product from '$lib/Product.svelte'
  import AccordionFilter from '$lib/AccordionFilter.svelte'
  import type { PageData } from './$types'

  export let data: PageData
  let isDrawerOpen = false

  function handleDrawerState() {
    isDrawerOpen = !isDrawerOpen
  }
</script>

<section class="mt-20 grid grid-layout lg:border-gray-50 md:px-6 px-5 2xl:px-20">
  <BrowsePagination {isDrawerOpen} {handleDrawerState} />
  <AccordionFilter {isDrawerOpen} {handleDrawerState} />
  <div
    class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-layout__items pt-2 gap-3"
  >
    {#each data.results as book}
      <Product name={book.book_details[0].title} author={book.book_details[0].author} />
    {/each}
  </div>
</section>
