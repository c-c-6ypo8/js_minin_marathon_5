<script>
  import DraggedItem from './DraggedItem.svelte'
  import BackButton from '../BackButton.svelte'
  let startedItem = DraggedItem
  let processedItem = null
  let readyItem = null
  let draggedItemProps = { text: 'Перетащи меня' }

  let readyItemHovered,
    startedItemHovered,
    processedItemHovered = false

  const moveItemToProcessed = () => {
    startedItem = null
    readyItem = null
    processedItem = DraggedItem
  }
  const moveItemToReady = () => {
    startedItem = null
    readyItem = DraggedItem
    processedItem = null
  }
  const moveItemToStarted = () => {
    startedItem = DraggedItem
    readyItem = null
    processedItem = null
  }
</script>

<div class="dragndrop-page">
  <BackButton theme="light" />
  <div class="task-list-container">
    <div class="task-list">
      <div class="task task-start">Начать</div>
      <div class="task task-in-process">В процессе</div>
      <div class="task task-ready">Готовы</div>
      <div
        class="place"
        class:hovered={startedItemHovered && startedItem === null}
        on:dragenter={() => (startedItemHovered = true)}
        on:dragleave={() => (startedItemHovered = false)}
        on:dragover|preventDefault
        on:drop={moveItemToStarted}
      >
        <svelte:component this={startedItem} {...draggedItemProps} />
      </div>
      <div
        class="place"
        class:hovered={processedItemHovered && processedItem === null}
        on:dragenter={() => (processedItemHovered = true)}
        on:dragleave={() => (processedItemHovered = false)}
        on:dragover|preventDefault
        on:drop={moveItemToProcessed}
      >
        <svelte:component this={processedItem} {...draggedItemProps} />
      </div>
      <div
        class="place"
        class:hovered={readyItemHovered && readyItem === null}
        on:dragenter={() => (readyItemHovered = true)}
        on:dragleave={() => (readyItemHovered = false)}
        on:dragover|preventDefault
        on:drop={moveItemToReady}
      >
        <svelte:component this={readyItem} {...draggedItemProps} />
      </div>
    </div>
  </div>
</div>

<style>
  .dragndrop-page {
    --back-color: rgb(238, 238, 238);
    background-color: var(--back-color);
    width: 100vw;
    height: 100vh;
  }

  .task-list-container {
    display: flex;
    justify-content: center;
  }

  .task-list {
    width: 700px;
    margin-top: 50px;
    display: flex;
    gap: 40px 50px;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
  }

  .task,
  .place {
    border-radius: 26px;
    width: 140px;
    text-align: center;
    flex-basis: 25%;
  }

  .hovered {
    background-color: rgb(194, 250, 204);
    outline: 5px solid rgb(146, 238, 146);
  }

  .task {
    padding: 15px 25px;
    color: var(--back-color);
  }

  .task-start {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(218, 133, 219, 1) 0%,
      rgba(81, 148, 254, 1) 100%
    );
  }

  .task-in-process {
    background: rgb(50, 168, 75);
    background: linear-gradient(
      90deg,
      rgb(67, 194, 95) 0%,
      rgba(66, 191, 231, 1) 100%
    );
  }

  .task-ready {
    background: rgb(105, 110, 255);
    background: linear-gradient(
      90deg,
      rgba(105, 110, 255, 1) 0%,
      rgba(66, 191, 231, 1) 100%
    );
  }
</style>
