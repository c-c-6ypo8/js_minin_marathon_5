<script>
  import { draggedItem, dropCell, tasksByCategory } from './stores.js'

  export let categoryId

  const drop = () => {
    if (isAvailable) $dropCell = { categoryId: categoryId }
    draggedOver = false
  }

  let draggedOver = false

  const enterDrag = () => (draggedOver = true)
  const leaveDrag = () => (draggedOver = false)

  $: isAvailable =
    $draggedItem &&
    ($draggedItem.categoryId !== categoryId ||
      ($tasksByCategory[categoryId].length > 1 &&
        $tasksByCategory[categoryId].slice(-1)[0].id !== $draggedItem.id))
</script>

<div
  class="cell"
  class:dragged-over={draggedOver && isAvailable}
  class:drag-available={isAvailable}
  on:dragover|preventDefault
  on:dragenter={enterDrag}
  on:dragleave={leaveDrag}
  on:drop={drop}
/>

<style>
  .cell {
    border-radius: 25px;
    padding: 10px 20px;
    height: 70px;
    color: #333;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .drag-available {
    border: 2px solid lightgray;
    border-style: dashed;
  }

  .dragged-over {
    background-color: rgb(223, 240, 218);
    border-color: rgb(187, 221, 176);
  }
</style>
