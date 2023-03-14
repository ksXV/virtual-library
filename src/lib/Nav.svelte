<script lang="ts">
  import { Hamburger } from 'svelte-hamburgers'
  import Menu from './Menu.svelte'

  let open = false
  let screenWidth: number = 0
</script>

<svelte:window bind:innerWidth={screenWidth} />

<nav
  class="flex flex-row-reverse justify-between items-center px-10 2xl:px-20 bg-white fixed top-0 w-full"
>
  <!--component
 
  {#if screenWidth < 700}
    <Hamburger bind:open />
  {:else}
  -->
  <Menu open />
  <!--
  
  {/if}
-->
  <img
    src="/images/logo.svg"
    alt="logo"
    class="object-contain cursor-pointer aspect-square md:w-[80px] w-[60px] 2xl:w-[90px]"
  />
</nav>
