<template>
  <section>
    <TypeFilter/>

    <div v-if="loading">
      <PageLoading/>
    </div>

      <div class="card-wrapper" v-else-if="pokemon">
        <div v-for="(pokemonContents, index) in pokemon" :key="index">
          <CardPokemon :pokemonContents="pokemonContents"/>
        </div>
      </div>
  </section>
</template>

<script>
import TypeFilter from '@/components/TypeFilter.vue';
import { api } from "@/services.js";
import CardPokemon from '@/components/CardPokemon';

export default {
  name: 'PokemonList',
  components: {
    TypeFilter,
    CardPokemon,
  },
  data() {
    return {
      pokemon: [],
      limit: 151,
      offset: 0,
      loading: true,
    }
  },
  methods: {
    getPokemon() {
      this.loading = true;
      api.get(`pokemon?limit=${this.limit}&offset=${this.offset}`)
      .then(response => {
        this.pokemon = response.data.results;
        this.loading = false;
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