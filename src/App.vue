<template>
  <div id="app">
    <Search/>
    <TypeFilter/>
    <router-view/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import TypeFilter from '@/components/TypeFilter.vue';

export default {
  name: 'App',
  components: {
    Search,
    TypeFilter,
  },
}
</script>

<style lang="scss">

</style>
