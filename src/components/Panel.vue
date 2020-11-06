<template> 
  <section class="Panel section is-flex is-justify-content-center my-6">
    <div class="Panel__box box">
      <article class="Panel__article media is-flex is-align-items-center">
        <div class="Panel__image media-left ">
          <figure class=" image is-96x96">
            <img :src="require('@/assets/images/' + imageSrc)" alt="Profile Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="title is-4">{{name}}</p>
            <p class="subtitle is-size-6">
              <a :href="subTitleLink">{{subTitle}}</a>
            </p>
          </div>
        </div>         
      </article>
      <slot></slot>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Panel',
  props: {
    imageSrc: String,
    name: String,
    subTitle: String,
    subTitleLink: String
  }
}

</script>


<style scoped lang="scss">

@import "../assets/sass/main.scss";

.Panel{
  background-color: $pink;
}

.Panel__box{
  width: 90%;
}

@include tablet {

    .Panel__box{
      width: 700px;
    }

}

.Panel__image img {
  border-radius: 100px;
  border: 5px solid $grey-light;
}

</style>
