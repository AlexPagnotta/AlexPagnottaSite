<template> 
    <ItemsContainer 
        title="I Miei Articoli" 
        :icon="['fab', 'medium']"
        seeRestlink="https://medium.com/@alexpagnotta">
      
      <div v-if="isLoading === true">
        Loading <!--TODO: Replace with a component and add style-->
      </div>
      <div v-if="hasError === true">
        Error <!--TODO: Replace with a component and add style-->
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
import RSSParser from "rss-parser";
//import axios from 'axios'

export default {
  name: 'MediumArticlesContainer',
  components: {
    ItemsContainer, Item
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




