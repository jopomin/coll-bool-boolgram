<template>
  <div class="post">
    <div class="post_head">
      <div class="post_head_info">
        <div class="post_head_pic">
          <img :src="userPic" :alt="userNick" />
        </div>
        <div class="post_head_text">
          <h5 class="post_head_prof">{{ userNick }}</h5>
          <p class="post_head_location">{{ userFullName }}e</p>
        </div>
      </div>
      <div class="post_head_settings">
        <a><i class="fas fa-ellipsis-h"></i></a>
      </div>
    </div>
    <div class="post_pic">
      <img :src="postPic" :alt="'Pic of ' + userNick" />
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
          <img :src="firstLikePic" :alt="firstLikeName" />
        </div>
        <p class="post_likes_text">
          Piace a <strong>{{ firstLikeName }}</strong> e
          <strong>altri {{ postLikes }}</strong>
        </p>
      </div>
      <div class="post_caption">
        <p>
          <span class="post_caption_user">{{ userNick }} </span
          ><span class="post_caption_text"
            >{{ postText }}
            <span class="post_hashtags"></span>
          </span>
        </p>
      </div>
      <div class="post_comments_num" v-if="postComments.length > 3">
        Mostra tutti i {{ postComments.length }} commenti
      </div>
      <div class="post_comments">
        <p v-for="index in 3" :key="index">
          <span class="post_comments_user"
            >{{ postComments[index].username }} </span
          ><span>{{ postComments[index].text }}</span>
        </p>
      </div>
      <div class="post_time">
        <p>{{ postDate }}</p>
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
  props: [
    'userNick',
    'userFullName',
    'userPic',
    'postPic',
    'postText',
    'postDate',
    'firstLikeName',
    'firstLikePic',
    'postLikes',
    'postComments',
  ],
}
</script>
