<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import Libros from './modules/examen/pages/BooksPage.vue'
import Autores from './modules/examen/pages/AuthorsPage.vue'
import NavBar from '../src/components/NavBar.vue'

export default {
  components: {
    Libros,
    Autores,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



</style>
