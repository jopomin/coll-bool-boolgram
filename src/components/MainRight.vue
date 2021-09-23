<template>
  <div class="main_right">
    <h4>Sono il MainRight</h4>
    <Profile />
    <Suggested />
    <Footer />
  </div>
</template>
<script>
import Profile from './Profile.vue'
import Suggested from './Suggested.vue'
import Footer from './Footer.vue'
export default {
  name: 'MainRight',
  components: {
    Profile,
    Suggested,
    Footer,
  },
}
</script>
