<template>
  <div class="stories">
    <Story
      v-for="(story, index) in stories"
      :key="index"
      :pic="story.profile_picture"
      :user="story.profile_name"
    />
  </div>
</template>
<script>
import Story from './Story.vue'
export default {
  name: 'Stories',
  components: {
    Story,
  },
  data() {
    return {
      stories: [],
    }
  },
  mounted() {
    this.axios.get(this.stories_url).then((result) => {
      this.stories = result.data
      console.log(this.stories)
    })
  },
}
</script>
