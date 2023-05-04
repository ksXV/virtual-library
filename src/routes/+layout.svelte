<script lang="ts">
  import type { LayoutData } from './$types'
  import { setContext } from 'svelte'
  import Nav from '$lib/Nav.svelte'
  import '../app.css'

  export let data: LayoutData
  let screenWidth = data.width || 0
  setContext('screenWidth', screenWidth)
</script>

<svelte:body bind:clientWidth={screenWidth} />
<svelte:head>Librarie Virtuala</svelte:head>
<Nav bind:screenWidth />
<main>
  <slot />
</main>
