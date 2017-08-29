<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import './assets/css/_mixins.scss'
  import './assets/css/_var.scss'
  import './assets/css/rest.scss'

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    max-width: 7.5rem;
    min-height: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 0.28rem;
  }
</style>
