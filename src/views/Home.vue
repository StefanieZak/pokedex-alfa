<template>
<section>
  <div>
    <PokemonList/>
  </div>
  </section>
</template>

<script>
import PokemonList from '@/components/PokemonList.vue';

export default {
  name: 'Home',
    components: {
    PokemonList,
  },
}
</script>
