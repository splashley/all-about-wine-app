<template>
  <div id="app">
    <Header />
    <Search />
    <Results />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Results from './components/Results.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Results,
    Footer
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");
body {
    background-color: #F6EEE9;
}
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
