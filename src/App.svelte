<script>
  import { projects, currentPageId } from './lib/stores.js'
  import ProjectsList from './lib/ProjectsList.svelte'
  import Cards from './lib/01-slides/Slides.svelte'
  import DragNDrop from './lib/02-dragndrop/DragNDrop.svelte'
  import Slider from './lib/03-slider/Slider.svelte'
  import HoverDesk from './lib/04-hoverdesk/HoverDesk.svelte'
  import Game from './lib/05-game/Game.svelte'

  const pages = [
    { id: 0, name: '5 проектов за 5 дней', component: ProjectsList },
    { ...projects[0], component: Cards },
    { ...projects[1], component: DragNDrop },
    { ...projects[2], component: Slider },
    { ...projects[3], component: HoverDesk },
    { ...projects[4], component: Game },
  ]

  let currentPage

  const changePage = (id) => {
    currentPage = pages[id].component
    document.title = pages[id].name
  }

  $: changePage($currentPageId)
</script>

<svelte:component this={currentPage} />
