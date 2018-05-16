// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import Http from './assets/js/http.js'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(MintUI)
Vue.prototype.http = Http;
Vue.config.productionTip = false
/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,data) {
      // 变更状态
      state.count++
    },
    decrement(state,data){
    	state.count--
    },

  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
