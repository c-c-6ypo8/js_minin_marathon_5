<script>
  const colors = [
    'rgba(21,135,196,1)',
    'rgba(108,196,21,1)',
    'rgba(196,161,21,1)',
    'rgba(196,65,184,1)',
    'rgba(60,189,175,1)',
    'rgba(60,189,121,1)',
    'rgba(216,96,42,1)',
  ]

  let color, shadow

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

  const setEffect = () => {
    color = getRandomColor()
    shadow = `0 0 2px ${color}, 0 0 10px ${color}`
  }
  const unSetEffect = () => {
    color = ''
    shadow = '0 0 2px #000'
  }

  unSetEffect()
</script>

<div
  class="element"
  style="background-color:{color}; box-shadow:{shadow};"
  on:mouseenter={setEffect}
  on:mouseleave={unSetEffect}
/>

<style>
  .element {
    width: 16px;
    height: 16px;
    background-color: #1d1d1d;
    box-shadow: 0 0 2px #000;
    transition: 2s ease;
  }

  .element:hover {
    transition-duration: 0s;
  }
</style>
