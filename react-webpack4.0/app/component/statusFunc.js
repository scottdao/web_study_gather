/*
* 采用闭包单例；
* LDY namespace
*/

import http from './http'

var LDY = {};

LDY.status = (function(window){
	
	return{
		store:function(store,obj){
				let storeData = null;
				
				store.subscribe(function(){//发布
					storeData = store.getState()
				})
				store.dispatch(obj);
				return storeData;

		},
		replace:function(store,obj){
			let storeData = null;
			
			store.subscribe(function(){//发布
					storeData = store.getState();
			})
			store.replaceReducer(function(){
				return obj.data
			})

			return storeData
		}
	}
})(window)

LDY.ipName = (function(window){//ip接口
	return{

	}
}(window))

LDY.http = http
export default LDY;
