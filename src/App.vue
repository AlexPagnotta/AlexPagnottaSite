<template>
  <div class="container">
      <NavBar/>
      <Header title="Ciao sono Alex Pagnotta e questo è il mio sito"/>
      <Divider/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Divider from './components/Divider.vue'

export default {
  name: 'App',
  components: {
    NavBar, Header, Divider
  }
}

</script>
