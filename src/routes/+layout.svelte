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
<Nav bind:screenWidth />
<main>
  <slot />
</main>
