<template>
  <main>
    <div class="main_container">
      <div class="main_sides_cont">
        <MainLeft />
        <MainRight @setLoadingMRight="setLoadingMain" />
      </div>
    </div>
  </main>
</template>
<script>
import MainLeft from './MainLeft.vue'
import MainRight from './MainRight.vue'

export default {
  name: 'App',
  components: {
    MainLeft,
    MainRight,
  },
  methods: {
    setLoadingMain(loadingMain) {
      this.$emit('setLoadingMain', loadingMain)
    },
  },
}
</script>
