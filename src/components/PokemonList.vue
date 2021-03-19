<template>
  <section>
    <div class="card-wrapper" v-if="pokemon">
      <div v-for="(pokemonContents, index) in pokemon" :key="index">
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
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>