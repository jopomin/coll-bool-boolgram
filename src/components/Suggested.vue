<template>
  <div class="suggested">
    <div class="sugg_head">
      <h5 class="sugg_title">Suggerimenti per te</h5>
      <p class="sugg_show">Mostra tutti</p>
    </div>
    <Profile
      v-for="(sugg, index) in suggested"
      :key="index"
      :pic="sugg.profile_picture"
      :user="sugg.profile_name"
    />
  </div>
</template>
<script>
import Profile from './Profile.vue'
export default {
  name: 'Suggested',
  components: {
    Profile,
  },
  data() {
    return {
      suggested: [],
    }
  },
  mounted() {
    this.axios.get(this.stories_url).then((result) => {
      this.suggested = result.data
      console.log(this.suggested)
    })
  },
}
</script>
