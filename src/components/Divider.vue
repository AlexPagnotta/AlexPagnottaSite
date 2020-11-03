<template> 
  <section class="Divider section is-flex is-justify-content-center">
    <hr class="Divider__line solid">
  </section>
</template>

<script>

export default {
  name: 'Divider'
}

</script>


<style scoped lang="scss">

@import "../assets/sass/main.scss";

.Divider__line  {
    border-top: 3px solid $purple;
    width: 300px;
}

</style>
