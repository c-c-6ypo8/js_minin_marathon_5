<script>
  // @ts-nocheck
  import { currentPageId, selectedPageId } from './stores.js'

  export let project
  const { id, name, pic, description } = project

  const selectThisPage = () =>
    ($selectedPageId = $selectedPageId == id ? ($currentPageId = id) : id)

  $: thisPageIsSelected = $selectedPageId == id
</script>

<div class="card" on:click={selectThisPage}>
  <div class="text">
    <h3>{name}</h3>
    <article class="description" class:hidden={!thisPageIsSelected}>
      {description}
    </article>
  </div>
  <div
    class="pic"
    class:hidden={!thisPageIsSelected}
    style="background-image: url({pic});"
  />
</div>

<style>
  .card {
    border-radius: 20px;
    width: 100%;
    border: 1px solid #777;
    padding: 20px;
    color: #777;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
  }

  .card h3 {
    font-size: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .pic {
    background-color: #fff;
    background-size: cover;
    width: 323px;
    height: 200px;
    border-radius: 10px;
  }

  .description {
    flex-basis: 50%;
  }

  .hidden {
    display: none;
  }
</style>
