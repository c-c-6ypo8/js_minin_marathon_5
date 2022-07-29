<script>
  import { projects, currentPageId } from './lib/stores.js'
  import ProjectsList from './lib/ProjectsList.svelte'
  import Cards from './lib/01-slides/Slides.svelte'
  import DragNDrop from './lib/02-dragndrop/DragNDrop.svelte'

  const pages = [
    { id: 0, name: '5 проектов за 5 дней', component: ProjectsList },
    { ...projects[0], component: Cards },
    { ...projects[1], component: DragNDrop },
  ]

  let currentPage

  const changePage = (id) => {
    currentPage = pages[id].component
    document.title = pages[id].name
  }

  $: changePage($currentPageId)
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
