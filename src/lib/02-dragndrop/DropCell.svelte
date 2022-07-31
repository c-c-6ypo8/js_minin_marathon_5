<script>
  import { draggedItem, dropCell } from './stores.js'

  export let categoryId

  const drop = () => {
    $dropCell = { categoryId: categoryId }
    draggedOver = false
  }

  let draggedOver = false

  const enterDrag = () => (draggedOver = true)
  const leaveDrag = () => (draggedOver = false)
</script>

<div
  class="cell"
  class:dragged-over={draggedOver}
  class:drag-opened={$draggedItem}
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

  .drag-opened {
    border: 2px solid lightgray;
    border-style: dashed;
  }

  .dragged-over {
    background-color: rgb(231, 231, 231);
  }
</style>
