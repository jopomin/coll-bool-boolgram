<template>
  <div class="post">
    <div class="post_head">
      <div class="post_head_info">
        <div class="post_head_pic">
          <img src="../assets/img/profile.jpg" alt="" />
        </div>
        <div class="post_head_text">
          <h5 class="post_head_prof">Username</h5>
          <p class="post_head_location">Luogo, Paese</p>
        </div>
      </div>
      <div class="post_head_settings">
        <a><i class="fas fa-ellipsis-h"></i></a>
      </div>
    </div>
    <div class="post_pic">
      <img src="../assets/img/landscape.png" alt="" />
    </div>
    <div class="post_main">
      <div class="post_actions">
        <div class="post_act_icons post_act_left">
          <div class="post_act post_heart">
            <i class="far fa-heart"></i>
          </div>
          <div class="post_act post_speech">
            <i class="far fa-comment"></i>
          </div>
          <div class="post_act post_share">
            <i class="far fa-paper-plane"></i>
          </div>
        </div>
        <div class="post_act_icons post_act_right">
          <div class="post_act post_book">
            <i class="far fa-bookmark"></i>
          </div>
        </div>
      </div>
      <div class="post_likes">
        <div class="post_likes_pic">
          <img src="../assets/img/profile.jpg" alt="" />
        </div>
        <p class="post_likes_text">
          Piace a <strong>Gigino</strong> e ad altri
          <strong>103.245</strong> utenti
        </p>
      </div>
      <div class="post_caption">
        <p>
          <span class="post_caption_user">michelepapagni </span
          ><span class="post_caption_text"
            >Ciao a tutti, belli e brutti.
            <span class="post_hashtags">#vivalavida #igers</span>
          </span>
        </p>
      </div>
      <div class="post_comments">
        <p>
          <span class="post_comments_user">peppiniello </span
          ><span
            >Bellissimo paesaggio! Devo andarci prima o poi, non vedo l'ora di
            partire! <span class="post_tag">@muccacarolina</span></span
          >
        </p>
      </div>
      <div class="post_time">
        <p>26 giugno</p>
      </div>
    </div>
    <div class="post_foot">
      <div class="post_write">
        <div class="post_write_emoji">
          <a><i class="post_write_icon far fa-smile"></i></a>
        </div>
        <div class="post_write_msg">
          <input
            type="text"
            name="post_write_mgs"
            id=""
            placeholder="Aggiungi un commento..."
          />
        </div>
        <div class="post_write_publish">
          <p>Pubblica</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
}
</script>
