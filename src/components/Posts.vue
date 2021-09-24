<template>
  <!-- se passato tramite prop, il savFlag viene applicato a tutti i Children. Come fare per passarlo solo al Child coinvolto nell'evento? -->
  <div class="posts">
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :userNick="post.profile_name"
      :userFullName="post.profile_fullname"
      :userPic="post.profile_picture"
      :postPic="post.post_image"
      :postText="post.post_text"
      :postDate="post.date.date"
      :postLikes="post.likes"
      :postComments="post.comments"
      @savePost="saveThePost"
      :savFlag="savFlag"
      :imageFlag="imageFlag"
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
      savFlag: false,
      imageFlag: [],
      savedPosts: [],
    }
  },
  mounted() {
    this.axios.get(this.posts_url).then((result) => {
      this.posts = result.data
      console.log(this.posts)
    })
  },
  methods: {
    saveThePost(postTBS, savedFlag, postImage) {
      console.log(savedFlag, postImage)
      if (this.savedPosts.length > 0) {
        this.savedPosts.forEach((savpost) => {
          if (savpost.post_image === postImage && savedFlag == true) {
            this.savedPosts.splice(this.savedPosts.indexOf(savpost), 1)
            this.imageFlag.splice(this.imageFlag.indexOf(postImage), 1)
            this.savFlag = false
          } else if (savpost.post_image === postImage && savedFlag == false) {
            this.savedPosts.push(postTBS)
            this.imageFlag.push(postImage)
            this.savFlag = true
          }
        })
      } else {
        this.savedPosts.push(postTBS)
        this.imageFlag.push(postImage)
        this.savFlag = true
      }
      console.log(this.savedPosts)
      console.log(this.imageFlag)
      console.log(this.savFlag)
    },
  },
}
</script>
