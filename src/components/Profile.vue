<template>
  <div class="profile" :class="followed ? 'followed' : null">
    <div class="prof_content">
      <div class="prof_pic">
        <img :src="pic" :alt="user" />
      </div>
      <div class="prof_text">
        <h5 class="prof_user">{{ user }}</h5>
        <p class="prof_fwers">
          Seguito da {{ likes[0].username }}
          <span v-if="likes.length > 1">+ altri {{ likes.length - 1 }}</span>
        </p>
      </div>
    </div>
    <div class="prof_foll">
      <p class="click_foll act_text" @click="follow">Segui</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
  props: ['pic', 'user', 'likes'],
  data() {
    return {
      followed: false,
    }
  },
  methods: {
    follow() {
      this.followed = true
      console.log(this.followed)
    },
  },
}
</script>
