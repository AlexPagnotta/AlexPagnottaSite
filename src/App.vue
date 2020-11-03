<template>
  <div class="container">
      <NavBar/>
      <Header title="Ciao sono Alex Pagnotta e questo è il mio sito"/>
      <Divider/>
      <Divider/>
      <Footer 
      imageSrc= "https://bulma.io/images/placeholders/128x128.png"
      text ="Sono Alex Pagnotta, ho 22 anni, e sin da piccolo ho sempre avuto una grande passione per tutto quello che riguarda l'informatica e la programmazione, passione che da qualche anno è diventato il mio lavoro.
      
            In questi anni ho principalmente lavorato in ambiente .Net, utilizzando .Net Core e approfondendo Azure e il cloud in generale, mentre nel tempo libero mi sono interessato anche allo sviluppo Frontend e Mobile, utilizzando varie tecnologie, tra cui React e React Native.
      "/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Divider from './components/Divider.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar, Header, Divider, Footer
  }
}

</script>
