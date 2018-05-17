const addMin={
	state: {
    count: 0
  },
  getters:{
  	
  },
  mutations: {//同步调用
    increment (state) {
      // 变更状态
      state.count<10?
      state.count++
      :
      alert('大于10')
    },
    decrement(state){
    	state.count>0?
    	state.count--
    	:
    	state.count = 0
    }
  },
  actions: {//异步调用
    increment (context,data) {
      context.commit('increment')
    },
    decrement(context,data){
    	context.commit('decrement')
    }
  }
}

export default addMin