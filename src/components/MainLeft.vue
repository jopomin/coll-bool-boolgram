<template>
  <div class="main_left">
    <Stories />
    <Posts />
  </div>
</template>
<script>
import Stories from './Stories.vue'
import Posts from './Posts.vue'
export default {
  name: 'MainLeft',
  components: {
    Stories,
    Posts,
  },
}
</script>
