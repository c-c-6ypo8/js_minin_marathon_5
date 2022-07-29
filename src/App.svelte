<script>
  import { projects } from './lib/stores.js'
  import ProjectsList from './lib/ProjectsList.svelte'
  import Cards from './lib/01-slides/Slides.svelte'

  const pages = [
    { id: 0, title: '5 проектов за 5 дней', component: ProjectsList },
    { ...projects[0], component: Cards },
    { ...projects[1], component: null },
  ]
  let currentPage = pages[0].component

  const loadPage = (e) => {
    currentPage = pages[e.detail].component
  }
</script>

<main>
  <svelte:component this={currentPage} on:page-load={loadPage} />
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
