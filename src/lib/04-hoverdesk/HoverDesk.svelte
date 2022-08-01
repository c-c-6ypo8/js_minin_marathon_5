<script>
  import BackButton from '../BackButton.svelte'
  import DeskElement from './DeskElement.svelte'

  const elementsQuantity = 500
</script>

<main class="hoverdesk-page">
  <div class="backbutton-container">
    <BackButton theme="dark" />
  </div>
  <div id="board">
    {#each Array(elementsQuantity) as el}
      <DeskElement />
    {/each}
  </div>
</main>

<style>
  .hoverdesk-page {
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }

  #board {
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    gap: 4px;
  }
</style>
