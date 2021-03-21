<template>
  <section class="card bg--white" v-if="show">
    <div v-if="infoPokemon">
    <router-link :to="{name: 'pokemon', params: {name: infoPokemon.name}}">
    <div>
      <img :src="infoPokemon.sprites.front_default" :alt="infoPokemon.name">
    </div>
    <div class="info-pokemon">
      <p>{{infoPokemon.name}}</p>
      <p>#{{infoPokemon.id}}</p>
    </div>
    </router-link>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: 'CardPokemon',
  props: ["pokemonContents"],
  data() {
    return {
      infoPokemon: "",
      typeOne: "",
      typeTwo: "",
      show: false,
    }
  },
  watch: {
    filterSelected() {
      this.TypeSelected();
    }
  },
  methods: {
    getInfoPokemon(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.infoPokemon = response.data;
        this.typeOne = this.infoPokemon.types[0].type.name;
        this.typeTwo = this.infoPokemon.types[1] ? this.infoPokemon.types[1].type.name : null;
        this.TypeSelected();
      });
    },
    TypeSelected() {
      if(this.filterSelected == "" || this.typeOne == this.filterSelected || this.typeTwo == this.filterSelected) {
        this.show = true;
      }
      else {
        this.show = false;
      }
    }
  },
  computed: {
    filterSelected() {
      return this.$store.state.typePokemon;
    }
  },
  created() {
    this.getInfoPokemon(this.pokemonContents.name); 
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 250px;
    height: 145px;
    margin: 10px 10px;
    border-radius: 3px;
    box-shadow: 0px 1px 1px rgba($color: #bdbdbd, $alpha: 1.0);
    transition: .3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    img {
      margin: 0px auto;
      padding: 10px 0;
    }
  }

  .info-pokemon {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    p {
      font-size: 1rem;
    }
  }
</style>