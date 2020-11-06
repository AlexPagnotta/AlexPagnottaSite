<template> 
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imageSrc" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">    
      <p class="title is-5">{{title}}</p>
      <div class="content">
          <div class="tags">
            <span class="tag is-info is-light">C#</span>
            <span class="tag is-info is-light">Azure</span>
            <span class="tag is-info is-light">Serverless</span>
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
    imageSrc: String
  }
}

</script>

<style scoped>

</style>



