<script>
  // @ts-nocheck
  import { gameTime as time, score } from './stores.js'
  import BackButton from '../BackButton.svelte'
  import TimeButton from './TimeButton.svelte'
  import Circle from './Circle.svelte'

  let board
  let screenPosition = 0
  let gameTimer

  const goToOptionsScreen = () => {
    screenPosition = -100
  }

  const goToGameScreen = () => {
    screenPosition = -200
  }

  const startGame = () => {
    goToGameScreen()
    $score = 0
    gameTimer = setInterval(() => ($time -= 1), 1000)
  }

  const stopGame = () => {
    clearInterval(gameTimer)
  }

  $: if ($time === 0) stopGame()
  $: timeString = $time < 10 ? '0' + $time : $time
</script>

<main class="game-page no-selection">
  <div class="backbutton-container">
    <BackButton theme="dark" />
  </div>
  <div class="screens" style="top:{screenPosition}vh;">
    <div class="screen-welcome">
      <h1>Тренировка меткости</h1>
      <div class="start no-selection" on:click={goToOptionsScreen}>
        Начать игру
      </div>
    </div>
    <div class="screen-options">
      <h1>Выберите время</h1>
      <ul class="time-list">
        <li>
          <TimeButton on:click={startGame} time="10" />
        </li>
        <li>
          <TimeButton on:click={startGame} time="20" />
        </li>
        <li>
          <TimeButton on:click={startGame} time="30" />
        </li>
      </ul>
    </div>
    <div class="screen-game">
      <h3 class:hide={!$time}>
        Осталось <span id="time">00:{timeString}</span>
      </h3>
      <div class="board" id="board" bind:this={board}>
        {#if !$time}
          <div class="score-dialog">
            <span>Счёт: <span class="primary">{$score}</span></span>
            <button class="btn" on:click={goToOptionsScreen}>Новая игра</button>
          </div>
        {:else}
          <Circle parent={board} />
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css?family=Khula&display=swap');

  .game-page {
    color: #fff;
    font-family: 'Khula', sans-serif;
    height: 100vh;
    width: 100vw;
    margin: 0;
    text-align: center;
    overflow: hidden;
  }

  .screens {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  .start {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .start:hover {
    color: #16d9e3;
  }

  h1 {
    line-height: 1.4;
    font-size: 4rem;
  }

  .screen-welcome,
  .screen-options,
  .screen-game {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: margin 0.5s ease-out;
    background: linear-gradient(90deg, #29323c 0%, #485563 100%);
    position: absolute;
    height: 100vh;
    width: 100vw;
  }

  .screen-options {
    top: 100vh;
  }

  .screen-game {
    top: 200vh;
  }

  .time-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .time-list li {
    margin: 10px;
  }

  .hide {
    opacity: 0;
  }

  .board {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 500px;
    height: 500px;
    background: linear-gradient(118.38deg, #29323c -4.6%, #485563 200.44%);
    box-shadow: -8px -8px 20px #2a333d, 10px 7px 20px #475462;
    border-radius: 30px;
    overflow: hidden;
  }

  .score-dialog {
    font-size: 60px;
    display: flex;
    flex-direction: column;
  }

  .primary {
    color: #16d9e3;
  }

  .btn {
    background-color: transparent;
    border: 2px solid #c0c0c0;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    margin-top: 50px;
  }

  .btn:hover {
    border: 2px solid #16d9e3;
    color: #16d9e3;
  }
</style>
