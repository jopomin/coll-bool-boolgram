import axios from 'axios'

const baseStoriesUrl =
  'https://flynn.boolean.careers/exercises/api/boolgram/profiles'
const basePostsUrl =
  'https://flynn.boolean.careers/exercises/api/boolgram/posts'

export default {
  install(Vue) {
    Vue.prototype.axios = axios
    Vue.prototype.stories_url = baseStoriesUrl
    Vue.prototype.posts_url = basePostsUrl
  },
}
