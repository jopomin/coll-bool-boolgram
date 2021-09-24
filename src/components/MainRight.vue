<template>
  <div class="main_right">
    <Usprof />
    <Suggested @setLoadingSugg="setLoadingMRight" />
    <Footer />
  </div>
</template>
<script>
import Usprof from './Usprof.vue'
import Suggested from './Suggested.vue'
import Footer from './Footer.vue'
export default {
  name: 'MainRight',
  components: {
    Usprof,
    Suggested,
    Footer,
  },
  methods: {
    setLoadingMRight(loadingMR) {
      this.$emit('setLoadingMRight', loadingMR)
    },
  },
}
</script>
