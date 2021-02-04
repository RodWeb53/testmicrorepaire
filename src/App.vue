<template>
  <div id="nav">
    <header-top></header-top>
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    'header-top': Header
  }
}
</script>


<style>

</style>
