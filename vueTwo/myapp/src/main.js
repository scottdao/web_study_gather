import Vue from 'vue'
import App from './App.vue'
import MinVuex from './min-vuex';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const minStore = new MinVuex.Store({
  state:{
    count:0
  },
  mutations:{
    COUNT(state){
     // console.log(state,payload)
     state.count++
      
    }, 
    MIN(state){
      state.count--;
    }
  }
})
Vue.prototype.$minStore = minStore;
Vue.config.productionTip = false;
Vue.use(Antd)

new Vue({
  render: h => h(App),
}).$mount('#app')
