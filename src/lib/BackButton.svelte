<script>
  import { currentPageId } from './stores.js'

  export { theme }

  let theme = 'light'

  const goToProjectsList = () => {
    $currentPageId = 0
  }
</script>

<div
  class="no-selection arrow-left {theme}"
  on:click={goToProjectsList}
  title="Назад"
>
  ←
</div>

<style>
  .arrow-left {
    font-size: 30px;
    padding: 0 15px;
    cursor: pointer;
  }

  .light {
    color: rgb(36, 36, 36);
  }

  .light:hover {
    color: rgb(94, 94, 94);
  }

  .light:active {
    color: rgb(146, 146, 146);
  }

  .dark {
    color: rgb(206, 206, 206);
  }

  .dark:hover {
    color: rgb(185, 185, 185);
  }

  .dark:active {
    color: rgb(138, 138, 138);
  }
</style>
