<template> 
  <section class="hero">
    <div class="hero-body">
      <div class="container ">
        <h1 class="title is-2 has-text-centered has-text-weight-light">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String
  }
}

</script>

