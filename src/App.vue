<template>
  <div id="nav">
    <header-top></header-top>
  </div>
  <router-view/>
    <footer-back></footer-back>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'header-top': Header,
    'footer-back': Footer
  }
}
</script>


<style scoped>


</style>