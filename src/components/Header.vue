<template> 
  <div class="Header">
    <h1 class="title is-1"> {{ title }} </h1>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String
  }
}

</script>


<style scoped>

.Header{
  height: 200px;
}

</style>
