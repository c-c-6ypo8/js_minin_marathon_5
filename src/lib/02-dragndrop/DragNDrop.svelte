<script>
  // @ts-nocheck
  import DraggedItem from './DraggedItem.svelte'
  import DropCell from './DropCell.svelte'
  import BackButton from '../BackButton.svelte'
  import { draggedItem, dropCell, categories, tasks, tasksById } from './stores'

  $: {
    console.log($tasksById)
  }

  const moveItem = () => {
    // $tasks[$draggedItem.id] = $tasks[$draggedItem.categoryId].filter(
    //   (item) => item.id !== $draggedItem.id,
    // )
    // console.log($tasks)
    // $tasks[$dropCell.categoryId].push($draggedItem)
    // console.log($tasks)

    $draggedItem = $dropCell = undefined
  }

  $: if ($draggedItem && $dropCell) {
    moveItem()
  }
</script>

<div class="dragndrop-page">
  <BackButton theme="light" />
  <div class="task-list">
    {#each categories as category}
      <div class="task-column">
        <div class="no-selection task tasks-{category.id}">{category.name}</div>
        {#each $tasks[category.id] as item}
          <svelte:component this={DraggedItem} {item} />
        {/each}
        <svelte:component this={DropCell} categoryId={category.id} />
      </div>
    {/each}
  </div>
</div>

<style>
  .dragndrop-page {
    --back-color: rgb(238, 238, 238);
    background-color: var(--back-color);
    width: 100vw;
    height: 100vh;
  }

  .task-list {
    margin-top: 50px;
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
  }

  .task-column {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .task {
    border-radius: 26px;
    width: 170px;
    text-align: center;
    padding: 15px 25px;
    color: var(--back-color);
  }

  .hovered {
    background-color: rgba(225, 255, 230, 0.719);
    outline: 2px solid rgba(169, 240, 169, 0.582);
  }

  .tasks-started {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(218, 133, 219, 1) 0%,
      rgba(81, 148, 254, 1) 100%
    );
  }

  .tasks-processed {
    background: rgb(50, 168, 75);
    background: linear-gradient(
      90deg,
      rgb(67, 194, 95) 0%,
      rgba(66, 191, 231, 1) 100%
    );
  }

  .tasks-ready {
    background: rgb(105, 110, 255);
    background: linear-gradient(
      90deg,
      rgba(105, 110, 255, 1) 0%,
      rgba(66, 191, 231, 1) 100%
    );
  }
</style>
