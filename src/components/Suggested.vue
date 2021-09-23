<template>
  <div class="suggested">
    <div class="sugg_head">
      <h5 class="sugg_title">Suggerimenti per te</h5>
      <p class="sugg_show">Mostra tutti</p>
    </div>
    <Profile />
    <Profile />
    <Profile />
    <Profile />
    <Profile />
    <Profile />
    <Profile />
    <Profile />
  </div>
</template>
<script>
import Profile from './Profile.vue'
export default {
  name: 'Suggested',
  components: {
    Profile,
  },
}
</script>
