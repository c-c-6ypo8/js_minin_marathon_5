<script>
  // @ts-nocheck
  import BackButton from '../BackButton.svelte'
  import SidePart from './SidePart.svelte'
  import MainSlide from './MainSlide.svelte'
  import { slides } from './stores'

  const summaryShift = -(slides.length - 1) * 100

  let sidebarPosition = 0
  let mainbarPosition = summaryShift

  const shiftSidebar = () => {
    sidebarPosition =
      sidebarPosition - 100 < summaryShift ? 0 : (sidebarPosition -= 100)
    mainbarPosition = summaryShift - sidebarPosition
  }

  const shiftMainbar = () => {
    mainbarPosition =
      mainbarPosition - 100 < summaryShift ? 0 : (mainbarPosition -= 100)
    sidebarPosition = summaryShift - mainbarPosition
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') shiftSidebar()
    if (e.key === 'ArrowUp' || e.key === 'PageUp') shiftMainbar()
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="slider-page">
  <div class="backbutton-container">
    <BackButton theme="light" />
  </div>
  <div
    class="sidebar"
    style="top:{sidebarPosition}vh;"
    on:mousedown={shiftSidebar}
  >
    {#each slides as slide}
      <SidePart
        title={slide.title}
        description={slide.description}
        color1={slide.color1}
        color2={slide.color2}
      />
    {/each}
  </div>
  <div class="mainbar" style="top:{mainbarPosition}vh;">
    {#each [...slides].reverse() as slide}
      <MainSlide url={slide.url} />
    {/each}
  </div>
  <div class="controls">
    <button class="down-button" on:click={shiftSidebar}>
      <i class="fas fa-arrow-down" />
    </button>
    <button class="up-button" on:click={shiftMainbar}>
      <i class="fas fa-arrow-up" />
    </button>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  .slider-page {
    font-family: 'Roboto', sans-serif;
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .sidebar {
    height: 100%;
    width: 35%;
    position: absolute;
    top: 0;
    left: 0;
    transition: top 0.5s ease-in-out;
  }

  .mainbar {
    height: 100%;
    position: absolute;
    top: 0;
    left: 35%;
    width: 65%;
    transition: top 0.5s ease-in-out;
  }

  button {
    background-color: #fff;
    border: none;
    color: #aaa;
    cursor: pointer;
    font-size: 16px;
    padding: 15px;
  }

  button:hover {
    color: #222;
  }

  button:focus {
    outline: none;
  }

  .slider-page .controls button {
    position: absolute;
    left: 35%;
    top: 50%;
    z-index: 100;
  }

  .slider-page .controls .down-button {
    transform: translateX(-100%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .slider-page .controls .up-button {
    transform: translateY(-100%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .backbutton-container {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 100;
  }
</style>
