<script>
  import { draggedItem } from './stores.js'

  export { item }

  let item

  const startDrag = () => {
    setTimeout(() => ($draggedItem = item), 0)
  }

  const endDrag = () => {
    $draggedItem = undefined
  }
</script>

<div
  class="item"
  class:left-its-place={$draggedItem == item}
  draggable="true"
  on:dragstart={startDrag}
  on:dragend={endDrag}
>
  {item.text}
</div>

<style>
  .item {
    box-shadow: 2px 2px 12px 0px rgba(34, 60, 80, 0.2);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 25px;
    padding: 10px 20px;
    height: 70px;
    color: #333;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: var(--back-color);
  }

  .left-its-place {
    box-shadow: unset;
    border: 1px solid rgb(189, 189, 189);
    opacity: 0.35;
  }
</style>
