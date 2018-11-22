import Vue from 'vue/dist/vue'
import App from './App.vue'
import router from '@/router/router'
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// console.log(111);
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  el: '#app',
  router,
  //store,
  components: { App },
  template: '<App/>'
})
