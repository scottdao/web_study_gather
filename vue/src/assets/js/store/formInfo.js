const formInfo = {
	state: {
    info:''
  },
  getters:{
  	
  },
  mutations: {//同步调用
	getInfo(state,info){
		state.info = info
	}
  },
  actions: {//异步调用
    
  }
}
export default formInfo