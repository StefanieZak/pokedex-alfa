<template>
  <section>
     <select name="select">
      <option value="valor1" selected disabled>Choose for type</option>
      <option value="valor2">Normal</option>
      <option value="valor3">Flying</option>
      <option value="valor4">Poison</option>
      <option value="valor5">Ground</option>
      <option value="valor6">Rock</option>
      <option value="valor7">Bug</option>
      <option value="valor8">Ghost</option>
      <option value="valor9">Steel</option>
      <option value="valor10">Fire</option>
      <option value="valor11">Water</option>
      <option value="valor12">Grass</option>
      <option value="valor13">Electric</option>
      <option value="valor14">Psychic</option>
      <option value="valor15">Ice</option>
      <option value="valor16">Dragon</option>
      <option value="valor17">Dark</option>
      <option value="valor18">Fairy</option>
      <option value="valor19">Unknown</option>
      <option value="valor20">Shadow</option>
      <option value="valor21">Fighting</option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'TypeFilter',
}
</script>

<style lang="scss" scoped>
  select {
    margin-left: 15px;
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