<template>
  <div class="story">
    <div class="story_cont">
      <div class="story_outer_border">
        <div class="story_inner_border">
          <div class="story_pic actStory">
            <img :src="pic" :alt="user" />
          </div>
        </div>
      </div>
    </div>
    <p class="story_user">
      {{ user }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Story',
  props: ['pic', 'user'],
}
</script>
