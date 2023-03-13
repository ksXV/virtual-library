<script lang="ts">
  import { Hamburger } from 'svelte-hamburgers'
  import Menu from './Menu.svelte'

  let open = false
  let screenWidth: number = 0
</script>

<svelte:window bind:innerWidth={screenWidth} />

<nav
  class="flex flex-row-reverse justify-between items-center px-10 bg-white fixed top-0 w-full"
>
  {#if screenWidth > 700}
    <Menu />
  {:else}
    <Hamburger bind:open />
  {/if}
  <a href="/" target="">
    <img
      src="/images/logo.svg"
      alt="logo"
      class="object-contain cursor-pointer aspect-square md:w-[80px] w-[60px]"
    />
  </a>
</nav>
