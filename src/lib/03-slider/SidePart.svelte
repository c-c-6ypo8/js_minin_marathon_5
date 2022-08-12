<script>
  export let title, description, color1, color2
</script>

<div
  class="slide"
  style="background: linear-gradient(210.0deg, {color1} 0%, {color2} 150%);"
>
  <h1 class="slide-title">{title}</h1>
  <p>{description}</p>
</div>

<style>
  .slide {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  .slide-title {
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: -30px;
  }
</style>
