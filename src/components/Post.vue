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
          <div class="post_act post_heart" @click="appreciate">
            <i v-if="loved" class="fas fa-heart red_heart"></i>
            <i v-else class="far fa-heart"></i>
          </div>
          <div class="post_act post_speech">
            <i class="far fa-comment"></i>
          </div>
          <div class="post_act post_share">
            <i class="far fa-paper-plane"></i>
          </div>
        </div>
        <div class="post_act_icons post_act_right">
          <div class="post_act post_book" @click="save">
            <i
              v-if="savFlag && imageFlag.includes(postPic)"
              class="fas fa-bookmark"
            ></i>
            <i v-else class="far fa-bookmark"></i>
          </div>
        </div>
      </div>
      <div class="post_likes">
        <div class="post_likes_pic">
          <img
            :src="postLikes[0].profile_picture"
            :alt="postLikes[0].username"
          />
        </div>
        <p class="post_likes_text">
          Piace a <strong>{{ postLikes[0].username }}</strong>
          <span v-if="postLikes.length > 1">
            e <strong>altri {{ postLikes.length - 1 }}</strong>
          </span>
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
      <p
        class="post_comments_num"
        v-if="postComments.length > 3 && allComments"
        @click="showComments"
      >
        Torna a 3 commenti
      </p>
      <p
        class="post_comments_num"
        v-else-if="postComments.length > 3"
        @click="showComments"
      >
        Mostra tutti e {{ postComments.length }} i commenti
      </p>
      <div class="post_comments">
        <div v-if="allComments">
          <p v-for="(comment, index) in postComments" :key="index">
            <span class="post_comments_user">{{ comment.username }} </span
            ><span>{{ comment.text }}</span>
          </p>
        </div>
        <div v-else>
          <p v-for="index in 3" :key="index">
            <span class="post_comments_user"
              >{{ postComments[index].username }} </span
            ><span>{{ postComments[index].text }}</span>
          </p>
        </div>
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
          <p class="act_text">Pubblica</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
  props: [
    'post',
    'userNick',
    'userFullName',
    'userPic',
    'postPic',
    'postText',
    'postDate',
    'postLikes',
    'postComments',
    'savFlag',
    'imageFlag',
  ],
  data() {
    return {
      allComments: false,
      loved: false,
      savedPosts: [],
    }
  },
  mounted() {},
  methods: {
    showComments() {
      this.allComments = !this.allComments
    },
    appreciate() {
      this.loved = !this.loved
    },
    save() {
      this.$emit('savePost', this.post, this.savFlag, this.post.post_image)
    },
  },
}
</script>
