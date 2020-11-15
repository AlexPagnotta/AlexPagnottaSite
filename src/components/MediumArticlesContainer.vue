<template> 
    <ItemsContainer 
        title="I Miei Articoli" 
        :icon="['fab', 'medium']"
        seeRestlink="https://medium.com/@alexpagnotta">
      
      <div v-if="isLoading === true">
        <LoadingSpinner/>
      </div>
      <div v-if="hasError === true">
        <ErrorBanner>
          <p class="title is-4">Ops! Questo non era previsto...</p>
          <p class="subtitle is-size-6 mt-5">
            Ehy, vi giuro sono un buon sviluppatore, questo errore non dipende da me, sarà sicuramente il feed RSS di Medium ad avere qualche problema.
          </p>
        </ErrorBanner>
      </div>
      <div v-else class="columns is-variable is-0-mobile is-3-tablet is-8-desktop mt-6">
        <div class="column" v-for="article in feed" v-bind:key="article.guid">
          <Item 
          :title="article.title" 
          :urlLink="article.link" 
          :imageSrc= "getImageFromArticleContent(article['content:encoded'])"
          :tags="article.categories"></Item>
        </div>  
      </div>

    </ItemsContainer>   

</template>

<script>

import ItemsContainer from './ItemsContainer.vue'
import Item from './Item.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorBanner from './ErrorBanner.vue'
import RSSParser from "rss-parser";
//import axios from 'axios'

export default {
  name: 'MediumArticlesContainer',
  components: {
    ItemsContainer, Item, LoadingSpinner, ErrorBanner
  },
  data () {
    return {
      feed: null,
      isLoading: true,
      hasError: false
    }
  },
  async mounted () {

    try{

      const parser = new RSSParser();

      //Get Feed trough Heroku to avoid CORS Issues
      const data = await fetch('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@alexpagnotta');

      //Using Axios return a 401 Error
      //const data = await axios.get('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@alexpagnotta');

      //If Axios is 
      //const text = data.data; 

      const text = await data.text(); 

      parser.parseString(text, (err, parsed) => {

        this.isLoading = false;

        if (err) {
          console.log("Error occured while parsing RSS Feed ${err.toString()}");
          this.hasError = true;
        } 
        else {
          this.feed = parsed.items.slice(0, 3);
          console.log(parsed.items);
        }

      });
    }
    catch (e) {

      console.log(e.toString());

      this.hasError = true;
      this.isLoading = false;
    }
  },
  methods: {

    //Medium only retun the initial html code of the article
    //so the image need to be extracted from the article
    getImageFromArticleContent(article) {
      
      //Put html on temp element
      var tmp = document.createElement('div');
      tmp.innerHTML = article;

      //Get first img tag and his src
      var imgSrc = tmp.getElementsByTagName('img')[0].src;

      return imgSrc;
    }
  }
}

</script>




