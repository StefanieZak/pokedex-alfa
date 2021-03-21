<template>
  <section class="wrapper">
    <h1>404</h1>
    <img src="@/assets/snorlax.svg">
    <p>Ooops! Snorlax has blocked your path!</p>
  </section>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  h1 {
    margin: 0 auto;
    font-size: 2.625rem;
    color: yellow;
    -webkit-text-stroke: 2px blue;
   
  }
  img {
    margin: 20px auto;
    width: 300px;
      @media screen and (max-width: 320px) {
        width: 200px;
      }
  }
  p {
    margin: 20px auto;
    color: blue;
      @media screen and (max-width: 320px) {
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
      }
  }
}
</style>