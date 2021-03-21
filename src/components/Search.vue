<template>
  <section>
    <form @submit="searchPokemon">
    <input type="text" id="search" name="search" placeholder="Search" v-model="search">
    </form>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: "",
      processedSearch: "",
    }
  },
  methods: {
    searchPokemon() {
      this.processedSearch = this.search.toLowerCase().replace(/[.,?!@#$0123456789]/g, "").trim();
        this.$router.push(`/pokemon/${this.processedSearch}`);
    }
  },
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