import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

import axios from "axios"

Vue.prototype.$axios = axios;

Vue.config.productionTip = true; //开启打包后的调试功能

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
