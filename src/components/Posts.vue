<template>
  <div class="posts">
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :userNick="post.profile_name"
      :userFullName="post.profile_fullname"
      :userPic="post.profile_picture"
      :postPic="post.post_image"
      :postText="post.post_text"
      :postDate="post.date.date"
      :firstLikeName="post.likes[0].username"
      :firstLikePic="post.likes[0].profile_picture"
      :postLikes="post.likes.length - 1"
      :postComments="post.comments"
    />
  </div>
</template>
<script>
import Post from './Post.vue'
export default {
  name: 'Posts',
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      options: 'long',
    }
  },
  mounted() {
    this.axios.get(this.posts_url).then((result) => {
      this.posts = result.data
    })
  },
}
</script>
