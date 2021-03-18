<template>
  <section v-on:keyup="searchPokemon">
    <input type="text" id="search" name="search" placeholder="Search" v-model="search">
  </section>
</template>

<script>
export default {
  name: 'Search',
    data() {
    return {
      search: "",
    }
  },
  methods: {
    searchPokemon() {
       this.$store.commit("search", this.search);
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  width: calc(100% - 30px);
  margin: 25px 15px 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid #c4c4c4;
  color: #a9a9a9;
  background: transparent;
}

input::placeholder {
  color: #a9a9a9;
}
</style>