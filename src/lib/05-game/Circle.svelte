<script>
  // @ts-nocheck

  import { score, circleColors } from './stores.js'
  import { getRandomNumber } from '../vendor/random'
  import { scale } from 'svelte/transition'
  import { cubicOut } from 'svelte/easing'

  export { parent }

  let parent

  let { width: parentWidth, height: parentHeight } =
    parent.getBoundingClientRect()

  let diameter, x, y, color1, color2, color3

  const border = 2

  const setPosition = () => {
    x = getRandomNumber(border, parentHeight - diameter - border)
    y = getRandomNumber(border, parentWidth - diameter - border)
  }

  const setSize = () => {
    diameter = getRandomNumber(10, 60)
  }

  const setColor = () => {
    const randomNum = getRandomNumber(0, circleColors.length - 1)
    color1 = circleColors[randomNum].color1
    color2 = circleColors[randomNum].color2
    color3 = circleColors[randomNum].color3
  }

  const handleClick = () => {
    setColor()
    setSize()
    setPosition()
    $score += 1
  }

  setColor()
  setSize()
  setPosition()
</script>

{#key diameter}
  <div
    class="circle no-selection"
    style:width={diameter + 'px'}
    style:height={diameter + 'px'}
    style:top={y + 'px'}
    style:left={x + 'px'}
    style:background={`linear-gradient(90deg, ${color1} 0%, 
                                              ${color2} 47%, 
                                              ${color3} 100%)`}
    on:click={handleClick}
    transition:scale={{ duration: 300, easing: cubicOut }}
  />
{/key}

<style>
  .circle {
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
  }
</style>
