<template>
  <section>
    <div class="card-wrapper" v-if="pokemon">
      <div v-for="(pokemonContents, index) in searchResults" :key="index">
        <CardPokemon :pokemonContents="pokemonContents"/>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import CardPokemon from '@/components/CardPokemon';

export default {
  name: 'PokemonList',
  components: {
    CardPokemon,
  },
  data() {
    return {
      pokemon: [],
      limit: 151,
      offset: 0,
    }
  },
  methods: {
    getPokemon() {
      api.get(`pokemon?limit=${this.limit}&offset=${this.offset}`)
      .then(response => {
        this.pokemon = response.data.results;
      });
    },
  },
  created() {
    this.getPokemon();
  },
  computed: {
    search() {
      return this.$store.state.search;
    },
    searchResults() {
      if(this.search == '' || this.search == ' ') {
        return this.pokemon;
      } else {
        return this.pokemon.filter(pokemon => pokemon.name == this.search);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>