<script>
  import ProjectCard from './ProjectCard.svelte'
  import { projects } from './stores'
</script>

<main class="list-page">
  <article class="list">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </article>
  <div class="comment">
    Проекты сделаны на Svelte, так как на Vanilla было скучно, а Svelte я прямо
    сейчас изучаю. <br />Исходные коды можно посмотреть
    <a href="https://github.com/c-c-6ypo8/js_minin_marathon_5">здесь</a>.
  </div>
</main>

<style>
  .comment {
    color: rgb(190, 190, 190);
    font-size: 14px;
    margin: 0 10px 10px;
    text-align: center;
  }

  .list {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: rgb(31, 31, 31);
    align-items: center;
  }
</style>
