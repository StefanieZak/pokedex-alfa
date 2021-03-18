<template>
  <div id="app">
    <Search/>
    <PokemonList/>
    <router-view/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import PokemonList from '@/components/PokemonList.vue';


export default {
  name: 'App',
  components: {
    Search,
    PokemonList,
  },
}
</script>

<style lang="scss">

</style>
