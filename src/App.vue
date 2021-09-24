<template>
  <div id="app">
    <Skeleton v-if="loading" />
    <Nav />
    <Main @setLoadingMain="setLoading" />
  </div>
</template>

<script>
import Skeleton from './components/Skeleton.vue'
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Skeleton,
    Nav,
    Main,
  },
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    setLoading(loading) {
      this.loading = loading
    },
  },
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
