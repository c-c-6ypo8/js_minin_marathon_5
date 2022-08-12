<script>
  import { createEventDispatcher } from 'svelte'
  import { gameTime } from './stores.js'

  export { time }

  const dispatch = createEventDispatcher()

  let time = 0

  const setTime = () => {
    $gameTime = time
    dispatch('click')
  }
</script>

<button class="time-btn" on:click={setTime}> {time} сек </button>

<style>
  .time-btn {
    background-color: transparent;
    border: 2px solid #c0c0c0;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }

  .time-btn:hover {
    border: 2px solid #16d9e3;
    color: #16d9e3;
  }
</style>
