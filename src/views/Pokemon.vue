<template>
  <section>
    <div class="card bg--white" v-if="infoPokemon">
      <div :class="bgColor" class="name">
      <p>{{infoPokemon.name}}</p>
      <p>#{{infoPokemon.id}}</p>
      </div>

      <div class="more-info">
        <div>
          <img :src="infoPokemon.sprites.front_default" :alt="infoPokemon.name">
        </div>
        <div>
          <div class="info-wrapper">
            <p>Habitat</p>
            <p v-if="species">{{species.habitat.name}}</p>
          </div>
          <div class="info-wrapper">
            <p>Height</p>
            <p>{{infoPokemon.height | weightHeightPokemon}} m</p>
          </div>
          <div class="info-wrapper">
            <p>Weight</p>
            <p>{{infoPokemon.weight | weightHeightPokemon}} kg</p>
          </div>
        </div>
      </div>

      <div class="type-pokemon" v-if="infoPokemon.types">
        <p :class="bgColor">{{infoPokemon.types[0].type.name}}</p>
        <p v-if="infoPokemon.types[1]" :class="bgColorTwo">{{infoPokemon.types[1].type.name}}</p>
      </div>

      <div class="stats" v-for="(value, index) in stats" :key="index">
        <p v-if="stats">{{value.stat.name}}</p>
          <div class="progress">
          <p class="progress-done" v-if="stats" :style="{width: value.base_stat/2 + '%', opacity: '1', background: value.base_stat >= 50 ? 'lightgreen' : 'tomato' }">{{value.base_stat}}</p>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <img src="@/assets/pokebola.png">
      <p>Pokemon not found!</p>
    </div>
    <router-link to="/">Voltar</router-link>
  </section>
</template>

<script>
import { api } from '@/services.js';

export default {
  name: 'Pokemon',
    data() {
    return {
      infoPokemon: "",
      bgColor: "",
      bgColorTwo: "",
      species: "",
      stats: "",
    }
  },
  methods: {
    getPokemonByName(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.infoPokemon = response.data;
        this.bgColor = "bg--" + this.infoPokemon.types[0].type.name;
        this.getSpecies(this.infoPokemon.id);
        this.stats = this.infoPokemon.stats;
        if(this.infoPokemon.types[1]) {
          this.bgColorTwo = "bg--" + this.infoPokemon.types[1].type.name;
        }
      });
    },
    getSpecies(name) {
      api.get(`pokemon-species/${name}`)
      .then(response => {
        this.species = response.data;
      });
    },
  },
  created() {
    this.getPokemonByName(this.$route.params.name);
  },
}

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px auto;
  max-width: 40vw;
  padding-bottom: 20px;
}

  .name {
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    p {
      font-size: 1.125rem;
      font-weight: bold;
    }
  }

 .more-info {
   display: flex;
   justify-content: center;
   padding: 15px 0;
    .info-wrapper {
      display: flex;
      p {
        margin: 5px 10px;
        &:first-child{
          font-weight: bold;
        }
      }
    }
  }

  .type-pokemon {
    display: flex;
    justify-content: center;
    p {
      font-size: 0.75rem;
      font-weight: bold;
      border-radius: 3px;
      padding: 5px 10px;
      margin: 10px 6px 10px;
    }
  }

  .stats {
    margin: 0 auto;
    .progress {
      background-color: #d8d8d8;
      border-radius: 5px;
      margin: 10px 0;
      height: 10px;
      width: 20vw;
  }
    .progress-done {
      border-radius: 5px;
      color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }

  a {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    &:hover {
      font-weight: bold;
    }
  }

  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    img {
      width: 30px;
      margin: 0 auto;
    }
    p { 
      color: #B30000;
      text-transform: initial;
      margin: 15px auto;
      margin-bottom: 50px;
    }
  }

@media screen and (max-width: 768px) {
  .card {
    margin: 5px auto;
    max-width: 280px;
  }

  .name p {
    font-size: 1rem;
  }

  .more-info {
    display: block;
    margin: 0 auto;
    padding: 10px 0;
    img {
      margin: 0 auto;
    }
    .info-wrapper {
      p {
        font-size: 0.875rem;
        margin: 5px 10px;
      }
    }
  }

  .stats {
    p {
      font-size: 0.75rem;
    }
    .progress {
      width: 150px;
    }
  }
}

</style>
