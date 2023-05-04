<style lang="postcss">
  .nav-wrapper {
    @apply flex flex-row self-end max-w-xs my-auto;
  }

  .nav-route-wrapper {
    @apply px-6 py-4 font-medium text-base 2xl:text-xl text-black cursor-pointer;
  }

  @media only screen and (max-width: 768px) {
    .nav-wrapper {
      @apply flex-col flex relative right-0 w-screen h-screen max-w-none flex-shrink-0 z-10;
    }
    .nav-route-wrapper {
      @apply border-b-[#fofofo] border-b-2 text-center px-14 rounded bg-white;
    }
  }
</style>

<script lang="ts">
  import { Hamburger } from 'svelte-hamburgers'
  const mdScreenWidth = 768
  let open: boolean = false
  function closeBurger() {
    open = false
  }
  export let screenWidth: number
</script>

<div class="md:hidden block absolute top-0 p-1 right-0 z-40">
  <Hamburger bind:open />
</div>
{#if open || screenWidth > mdScreenWidth}
  <ul class="nav-wrapper">
    <a on:click={closeBurger} href="/" target="">
      <li class="nav-route-wrapper">Home</li>
    </a>
    <a on:click={closeBurger} href="/browse" target="">
      <li class="nav-route-wrapper">Browse</li>
    </a>
    <a on:click={closeBurger} href="/faq" target="">
      <li class="nav-route-wrapper">FAQ</li>
    </a>
  </ul>
{/if}
