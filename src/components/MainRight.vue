<template>
  <div class="main_right">
    <Profiles />
    <Suggested />
    <Footer />
  </div>
</template>
<script>
import Profiles from './Profiles.vue'
import Suggested from './Suggested.vue'
import Footer from './Footer.vue'
export default {
  name: 'MainRight',
  components: {
    Profiles,
    Suggested,
    Footer,
  },
}
</script>
