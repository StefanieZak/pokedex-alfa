<template>
  <section class="loading">
    <img src="@/assets/pokebola.png">
    <img src="@/assets/pokebola.png">
    <img src="@/assets/pokebola.png">
  </section>
</template>

<script>
export default {
  name: "Pageloading",
}
</script>

<style lang="scss" scoped>
  .loading{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    img {
      width: 20px;
      height: 20px;
      margin: 5px;
      display: inline-block;
      animation: load .8s infinite alternate;
      &:nth-child(1) {
        animation-delay: 0.3s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.1s;
      }                 
    }
  }

  @keyframes load {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 20px, 0);
    }
  }
</style>