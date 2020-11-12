<template> 
    <ItemsContainer 
    title="I Miei Progetti" 
    :icon="['fab', 'github']"
    link="https://github.com/AlexPagnotta" />   
    {{data}}
    {{isLoading}}
    {{error}}
</template>

<script>

import ItemsContainer from './ItemsContainer.vue'


export default {
  name: 'GithubProjectsContainer',
  components: {
    ItemsContainer
  },
  props: {
    data: Array,
    isLoading: Boolean,
    hasError: Boolean
  }
}

</script>




