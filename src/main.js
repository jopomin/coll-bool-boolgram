import Vue from 'vue'
import App from './App.vue'
import axiosPlugin from './plugins/axiosPlugin'

Vue.config.productionTip = false
Vue.use(axiosPlugin)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
