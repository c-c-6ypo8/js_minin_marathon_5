<script>
  // @ts-nocheck
  import { currentPageId, selectedPageId } from './stores.js'

  export { project }

  let project

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
    border: 1px solid rgb(44, 44, 44);
    padding: 20px;
    color: rgb(194, 194, 194);
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    background-color: rgb(43, 43, 43);
    transition: all 0.1s ease-in;
    gap: 15px;
  }

  .card:hover {
    background-color: rgb(63, 63, 63);
    border-color: rgb(65, 65, 65);
  }

  .card h3 {
    font-size: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
  }

  .pic {
    background-color: #fff;
    background-size: cover;
    width: 323px;
    height: 200px;
    border-radius: 10px;
  }
</style>
