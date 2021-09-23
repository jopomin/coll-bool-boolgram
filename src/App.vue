<template>
  <div id="app">
    <Nav />
    <Main />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Main,
  },
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
