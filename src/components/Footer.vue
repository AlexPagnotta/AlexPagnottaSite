<template> 
  <section class="section is-flex is-justify-content-center">
    <div class="Footer__box box">
      <article class="Footer__article media">
        <div class="Footer__image media-left">
          <figure class=" image is-96x96">
            <img :src="imageSrc" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="Footer__text">
              {{text}}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    imageSrc: String,
    text: String
  }
}

</script>


<style scoped lang="scss">

@import "../assets/sass/main.scss";

@include mobile {

    .Footer__article{
      flex-direction: column;
      align-items: center;
    }

    .Footer__image{
      padding-right: 0px;
      padding-bottom: 2rem;
    }
}


@include tablet {

    .Footer__box{
      width: 800px;
    }

    .Footer__image{
      padding-right: 1.5rem;
    }
}

.Footer__image img {
  border-radius: 100px;
  border: 5px solid $white;
}

.Footer__text{
  white-space: pre-line;
}

</style>
