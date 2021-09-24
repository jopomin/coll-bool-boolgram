<template>
  <div class="suggested">
    <div class="sugg_head">
      <h5 class="sugg_title">Suggerimenti per te</h5>
      <p class="sugg_show">Mostra tutti</p>
    </div>
    <Profile
      v-for="(sugg, index) in suggested"
      :key="index"
      :pic="sugg.post_image"
      :user="sugg.profile_name"
      :likes="sugg.likes"
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
      loading: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.axios.get(this.posts_url).then((result) => {
        this.suggested = result.data
        this.loading = false
        this.setLoadingSugg()
      })
    }, 2000)
  },
  methods: {
    setLoadingSugg() {
      this.$emit('setLoadingSugg', this.loading)
    },
  },
}
</script>
