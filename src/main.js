import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

const LoginStatus = new Vuex.Store({
  state: {
    count: 0,
    token: '',
    logged: false
  },
  mutations: {
    increment (state) {
      state.count++
    },
    login(state, token){
      state.token = token
      state.logged = true
    },
    logout(state){
      state.token = ''
      state.logged = false
    }

  }
})

new Vue({
  router,
  render: h => h(App),
  store: LoginStatus,
}).$mount('#app')
