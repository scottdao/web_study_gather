import qs from 'qs'
//import  'whatwg-fetch'
class Http {
	constructor() {
		if (ENV =='dev') {
		  this.URL = 'api'
		  //this.URL = 'http://api.wawa.kinlink.cn/';
		}else if(ENV =='production'){
		  this.URL = 'http://api.wawa.kinlink.cn/'
		}
	}
	post(url,data,callBack,failer){
		var token = '123'
		if(token !='undefined' && token != null ){
			Object.assign(data,{token:token})
		}
		var $url = '';
		if(/(^https?:\/\/)|(^\d{3}.\d{1,3}.\d{1,3}.\d{1,3}:\d{0,4})/.test(url)){
			$url = url
		}else{
			$url = this.URL + url
		}
		
		data = qs.stringify(data);
		fetch($url,{
        			 method:'post',
        			 body:data,
        			 headers:{
        			 	'content-type':'application/x-www-form-urlencoded'
        			 }
       }).then((res)=>res.json()).then((req)=>{
        		callBack(req)
        		//错误500
        	}).catch((err)=>{
        		console.log(err)
        		failer && failer(err);
        	})
        $url = null;
	}
}

const http = new Http();

export default http

