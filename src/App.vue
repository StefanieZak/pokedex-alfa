<template>
  <section>
    <div id="app">
      <Search/>
      <router-view/>
    </div>
  </section>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'App',
  components: {
    Search,
  },
}
</script>

<style lang="scss">

</style>
