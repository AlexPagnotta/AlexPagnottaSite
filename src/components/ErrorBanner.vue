<template> 
  <div class="ErrorBanner mb-6 mt-6 is-flex is-align-items-center is-justify-content-center">
    <div class="ErrorBanner__notificaton notification is-danger is-light">
      <slot></slot>
    </div>
  </div>

</template>

<script>

export default {
  name: 'ErrorBanner'
}

</script>

<style scoped lang="scss">

@import "../assets/sass/main.scss";

.ErrorBanner{
  width: 100%;
}


.ErrorBanner__notificaton{
  width: 90%;
}

@include tablet {

    .ErrorBanner__notificaton{
      width: 500px;
    }
}

</style>

