<template>
  <section>
     <select name="select" v-model="selected" @change="getPokemonByType($event)">
      <option value="" selected>All pokemon</option>
      <option v-for="(type, index) in types" :key="index" :value="type.name" style="text-transform: capitalize;">{{type.name}}</option>
    </select>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: 'TypeFilter',
  data() {
    return {
      types: "",
      selected: "",
      forType: "",
      unusedTypes: ["dark", "unknown", "shadow"],
    }
  },
  watch: {
    selected() {
      this.pokemonForType(this.selected);
    }
  },
  methods: {
    getPokemonByType() {
      api.get(`type`)
      .then(response => {
        this.types = response.data.results.filter(item => !this.unusedTypes.includes(item.name));
      });
    },
    pokemonForType(event) {
        this.selected = event;
        this.$store.commit("typePokemon", this.selected);
    }
  },
  created() {
    this.getPokemonByType();
  }
}
</script>

<style lang="scss" scoped>
  select {
    margin-left: 15px;
    margin-bottom: 5px;
    padding: .25em;
    border: 0;
    border-bottom: 2px solid #ccc; 
    letter-spacing: .05em;
    border-radius: 3px;
    &:focus, &:active {
      outline: 0;
      border-bottom-color: rgb(104, 248, 159);
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
   &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-left: 2px solid #faf6ed;
      border-right: 2px solid #faf6ed;
    }
  }
</style>