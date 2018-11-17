import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
