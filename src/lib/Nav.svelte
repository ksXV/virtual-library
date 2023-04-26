<script lang="ts">
  import Menu from './Menu.svelte'

  export let screenWidth: number
</script>

<svelte:window bind:innerWidth={screenWidth} />
<nav
  class={`flex md:flex-row-reverse justify-between items-center md:px-10 px-2 2xl:px-20 bg-white fixed top-0 w-full`}
>
  <Menu bind:screenWidth />
  <img
    src="/images/logo.svg"
    alt="logo"
    class="object-contain cursor-pointer aspect-square md:w-[80px] w-[65px] 2xl:w-[85px]"
  />
</nav>
