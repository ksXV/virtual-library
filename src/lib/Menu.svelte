<style lang="postcss">
  .nav-wrapper {
    @apply flex flex-row self-end max-w-xs my-auto;
  }

  .nav-route-wrapper {
    @apply px-6 py-4 font-medium text-base 2xl:text-xl text-black cursor-pointer;
  }

  @media only screen and (max-width: 700px) {
    .nav-wrapper {
      @apply flex-row flex absolute bottom-0;
    }
    .nav-route-wrapper {
      @apply border-b-[#fofofo] border-b-2 px-14 rounded bg-white;
    }
  }
</style>

<script lang="ts">
  export let open: boolean
</script>

<ul class="nav-wrapper">
  <li class="nav-route-wrapper">
    <a href="/" target="">Home</a>
  </li>
  <li class="nav-route-wrapper">
    <a href="/browse" target="">Browse</a>
  </li>
  <li class="nav-route-wrapper">
    <a href="/faq" target="">FAQ</a>
  </li>
</ul>
