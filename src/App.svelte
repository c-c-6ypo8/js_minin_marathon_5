<script>
  import { projects, currentPageId } from './lib/stores.js'
  import ProjectsList from './lib/ProjectsList.svelte'
  import Cards from './lib/01-slides/Slides.svelte'

  const pages = [
    { id: 0, title: '5 проектов за 5 дней', component: ProjectsList },
    { ...projects[0], component: Cards },
    { ...projects[1], component: null },
  ]

  $: currentPage = pages[$currentPageId].component
</script>

<main>
  <svelte:component this={currentPage} />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>
