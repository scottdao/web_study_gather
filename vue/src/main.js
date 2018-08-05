// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import Http from './assets/js/http/http.js'
import 'mint-ui/lib/style.css'
import store from './assets/js/store/index.js'
import './assets/js/rongyun/rongyun_start.js'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue, {
    msgtime: 1,//目前只有一项，即msg方法的默认消失时间，单位：秒
});
//console.log(layer)
//import Vuex from 'vuex'
//Vue.use(Vuex)
Vue.use(MintUI)
Vue.prototype.http = Http;
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.config.devtools = true
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
