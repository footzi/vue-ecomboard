import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
