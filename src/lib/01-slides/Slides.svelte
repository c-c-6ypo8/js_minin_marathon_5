<script>
  import BackButton from '../BackButton.svelte'
  import Slide from './Slide.svelte'
  import { slides } from './slides-stores'
</script>

<div class="slides-page">
  <BackButton theme="dark" on:page-load />
  <div class="slides">
    {#each slides as slide}
      <Slide name={slide.name} pic={slide.pic} />
    {/each}
  </div>
</div>

<style>
  .slides {
    display: flex;
    align-items: center;
    background: #111;
    gap: 20px;
    margin: 10px 0;
  }

  .slides-page {
    padding: 0 20px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
