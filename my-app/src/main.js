// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import MintUI from 'mint-ui'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import wcSwiper from './wc-swiper'

Vue.use(wcSwiper)
Vue.use(MintUI)

import 'mint-ui/lib/style.css'
import './main.scss'
import './common/stylus/style.css'
import './common/index/css/index.css'
import './common/public/css/core.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
