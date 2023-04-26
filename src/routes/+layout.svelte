<script lang="ts">
  import type { LayoutData } from './$types'
  import Nav from '$lib/Nav.svelte'
  import '../app.css'

  export let data: LayoutData
  let screenWidth = data.width || 0
</script>

<svelte:body bind:clientWidth={screenWidth} />
<Nav bind:screenWidth />
<main>
  <slot />
</main>
