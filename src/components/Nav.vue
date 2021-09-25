<template>
  <nav>
    <div class="main_container nav_container">
      <div class="nav_logo">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="nav_search">
        <input type="search" name="nav_search" id="" placeholder="Cerca" />
      </div>
      <div class="nav_icons">
        <div class="nav_act nav_home">
          <i class="fas fa-home"></i>
        </div>
        <div class="nav_act nav_dms">
          <i class="far fa-paper-plane"></i>
        </div>
        <div class="nav_act nav_add">
          <i class="far fa-plus-square"></i>
        </div>
        <div class="nav_act nav_comp">
          <i class="far fa-compass"></i>
        </div>
        <div class="nav_act nav_heart">
          <i class="far fa-heart"></i>
        </div>
        <div class="nav_act nav_prof_pic">
          <img src="../assets/img/jopomin.jpg" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Nav',
}
</script>
