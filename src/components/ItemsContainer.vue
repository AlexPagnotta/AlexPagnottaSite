<template> 
  <section class="ItemsContainer section mb-6">

    <div class="ItemsContainer__header is-flex is-align-items-center">
      <h3 class="title is-3 mb-0">{{title}} </h3>
      <a :href="seeRestlink" class="mr-3">
          <font-awesome-icon :icon="icon" class="ItemsContainer__header__icon"/>
      </a>
    </div>
      
    <slot></slot>

    <div class="is-flex is-justify-content-center mt-6">
      <button class="button is-primary is-light is-medium" @click="goToUrl">
        <span class="icon">
          <font-awesome-icon :icon="icon"/>
        </span>
        <span>Visualizza il resto</span>
      </button>
    </div>

  </section>

</template>

<script>


export default {
  name: 'ItemsContainer',
  components: {
  },
  props: {
    icon: Array,
    title: String,
    seeRestlink: String
  },
  methods: {
    goToUrl: function () {
      window.location = this.seeRestlink;
    }
  }
}

</script>

<style scoped>

.ItemsContainer{
    padding: 1rem 2rem;
}

.ItemsContainer__header__icon  {
    font-size: 32px; 
    margin-left: 20px;
}

</style>



