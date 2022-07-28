<script>
  import Slide from './Slide.svelte'
  const cars = [
    {
      name: 'Ferrari',
      pic: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Lamborghini',
      pic: 'https://images.unsplash.com/photo-1573950940509-d924ee3fd345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80',
    },
    {
      name: 'Camaro',
      pic: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80',
    },
    {
      name: 'Aston',
      pic: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Tesla',
      pic: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
  ]
</script>

<div class="container">
  {#each cars as car}
    <Slide {car} />
  {/each}
</div>

<style>
  .container {
    width: 100vw;
    display: flex;
    padding: 0 20px;
  }
</style>
