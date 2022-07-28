<script>
  import { selectedCar } from './stores.js'
  export let car
  const select = () => ($selectedCar = car.name)
</script>

<div
  class="slide"
  class:active={$selectedCar == car.name}
  style="background-image: url('{car.pic}');"
  on:click={select}
>
  <h3>{car.name}</h3>
</div>

<style>
  .slide {
    height: 80vh;
    border-radius: 20px;
    margin: 10px;
    cursor: pointer;
    color: white;
    flex: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .slide h3 {
    position: absolute;
    font-size: 24px;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }

  .slide.active {
    flex: 10;
  }

  .slide.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
</style>
