<template> 
  <div class="LoadingSpinner is-flex is-align-items-center is-justify-content-center "><div></div><div></div><div></div><div></div></div>
</template>

<script>

export default {
  name: 'LoadingSpinner'
}

</script>


<style scoped lang="scss">

@import "../assets/sass/main.scss";

.LoadingSpinner {
  width: 100%;
  height: 350px;
}

.LoadingSpinner div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 5px solid $pink;
  border-radius: 50%;
  animation: LoadingSpinnerAnimation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $pink transparent transparent transparent;
}
.LoadingSpinner:nth-child(1) {
  animation-delay: -2s;
}
.LoadingSpinner:nth-child(2) {
  animation-delay: -1s;
}
.LoadingSpinner:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes LoadingSpinnerAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
