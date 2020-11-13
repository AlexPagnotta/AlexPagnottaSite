<template> 
    <ItemsContainer 
      title="I Miei Progetti" 
      :icon="['fab', 'github']"
      seeRestlink="https://github.com/AlexPagnotta"> 
      
      <div v-if="isLoading === true">
        Loading <!--TODO: Replace with a component and add style-->
      </div>
      <div v-if="hasError === true">
        Error <!--TODO: Replace with a component and add style-->
      </div>
      <div v-else class="columns is-variable is-0-mobile is-3-tablet is-8-desktop mt-6">
        <div class="column" v-for="project in data" v-bind:key="project.id">
          <Item 
          :title="project.name" 
          :urlLink="project.html_url" 
          :imageSrc= "require(`@/assets/images/github-images/${project.name}.png`)"
          :tags="project.topics"></Item>
        </div>  
      </div>

    </ItemsContainer>   

</template>

<script>

import ItemsContainer from './ItemsContainer.vue'
import Item from './Item.vue'
import axios from 'axios'

export default {
  name: 'GithubProjectsContainer',
  components: {
    ItemsContainer, Item
  },
  data () {
    return {
      data: null,
      isLoading: true,
      hasError: false
    }
  },
  mounted () {
    axios
      .get('https://api.github.com/users/alexpagnotta/repos', {
        headers: {
          'Accept': 'application/vnd.github.mercy-preview+json'
        }})
      .then(response => (
        this.data = response.data.filter(project => {
          return (
          project.name === 'AlexPagnottaPersonalSite' || 
          project.name === 'BookApp' ||
          project.name === 'OpenFiberAzureFunction'
        )})
      ))
      .catch(error => {
        console.log(error)
        this.hasError = true
      })
      .finally(() => this.isLoading = false)
  }
}

</script>




