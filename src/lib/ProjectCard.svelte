<script>
  import { selectedProjectId } from './stores.js'
  import { createEventDispatcher } from 'svelte'
  // @ts-nocheck

  export let project
  const { id, name, pic, description } = project

  const dispatch = createEventDispatcher()

  const select = () =>
    ($selectedProjectId =
      $selectedProjectId == id ? dispatch('page-load', id) : id)
</script>

<div class="card" on:click={select}>
  <h3>{name}</h3>
  <div class="expanded" class:hidden={$selectedProjectId != id}>
    <article class="description">{description}</article>
    <div class="pic" style="background-image: url({pic});" />
  </div>
</div>

<style>
  .card {
    border-radius: 20px;
    width: 100%;
    border: 1px solid #777;
    padding: 15px 20px 20px;
    color: #777;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
  }

  .card h3 {
    width: 100%;
    font-size: 20px;
  }

  .expanded {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
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
