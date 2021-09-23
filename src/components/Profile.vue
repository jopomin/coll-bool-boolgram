<template>
  <div class="profile">
    <div class="prof_content">
      <div class="prof_pic">
        <img :src="pic" :alt="user" />
      </div>
      <div class="prof_text">
        <h5 class="prof_user">{{ user }}</h5>
        <p class="prof_fwers">seguito da amico_uno, amico_due</p>
      </div>
    </div>
    <div class="prof_foll">
      <p class="click_foll">Segui</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
  props: ['pic', 'user'],
}
</script>
