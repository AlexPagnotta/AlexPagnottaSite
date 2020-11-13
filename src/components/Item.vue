<template> 
  <div class="Item card">
    <div class="card-image">
      <figure class="image is-4by3">
        <a :href="urlLink">
          <img :src="imageSrc" alt="Placeholder image">
        </a>
      </figure>
    </div>
    <div class="card-content">    
      <p  class="title is-5"><a :href="urlLink">{{title}}</a></p>
      <div class="content">
          <div class="tags">
            <span class="tag is-info is-light" v-for="tag in tags" v-bind:key="tag">{{tag}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: {
    title: String,
    urlLink: String,
    imageSrc: String,
    tags: Array
  }
}

</script>

<style scoped>

.ItemsContainer img{
    object-fit: cover;

    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(80%);
}

</style>



