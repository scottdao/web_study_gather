import Vue from 'vue'
import Vuex from 'vuex'
import method from './module.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	  modules:{
	  	addMin:method.addMin,
	  	formInfo:method.formInfo
	  }
})
export default store