<script>
  import { dropCell } from './stores.js'

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
  on:dragover|preventDefault
  on:dragenter={enterDrag}
  on:dragleave={leaveDrag}
  on:drop={drop}
/>

<style>
  .cell {
    box-shadow: 3px 4px 19px 2px rgba(34, 60, 80, 0.2);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 25px;
    padding: 10px 20px;
    height: 70px;
    color: #333;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .dragged-over {
    border: 3px solid green;
  }
</style>
