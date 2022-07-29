<script>
  export let text = ''
  const startDrag = () => {
    setTimeout(() => (itemIsDragged = true), 0)
  }

  const endDrag = () => {
    itemIsDragged = false
  }

  let itemIsDragged = false
  let position
</script>

<div
  class="item"
  class:left-its-place={itemIsDragged}
  draggable="true"
  on:dragstart={startDrag}
  on:dragend={endDrag}
>
  {text}
</div>

<style>
  .item {
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

  .left-its-place {
    box-shadow: unset;
    border: 1px solid rgb(189, 189, 189);
    opacity: 0.35;
  }
</style>
