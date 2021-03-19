<template>
  <div>
 
  </div>
</template>

<script>
import { api } from '@/services.js';

export default {
  name: 'Pokemon',
    data() {
    return {
      infoPokemon: "",
    }
  },
  methods: {
    getPokemonByName(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.infoPokemon = response.data;
      });
    },
  },
  created() {
    this.getPokemonByName(this.$route.params.name);
  },
}

</script>

<style lang="sass" scoped>

</style>
