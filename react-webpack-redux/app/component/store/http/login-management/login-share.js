
import http from 'Component/http';
import {requsetShareStart,requsetShareSuccess,requestShareFiled} from 'Component/store/action/login-management/login-share.js'

import store from 'Component/store';

function loginShare(){
	store.dispatch(requsetShareStart())
	http.post('/V2/Share',{},(res) =>{
		//console.log(res)
		store.dispatch(requsetShareSuccess(res));
  	},(error)=>{
  		//console.log(error)
  		store.dispatch(requestShareFiled(error));
  	})
	
}
	

export default loginShare;
