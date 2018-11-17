import qs from 'qs';
import { MessageBox } from 'mint-ui';
import axios from 'axios'
class Http{
	constructor(){
        axios.defaults.baseURL = 'http://api.wawa.kinlink.cn';
//		axios.defaults.headers.common['Authorization'] = token;
		axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
		this.baseURL =  axios.defaults.baseURL;
		this.ReqInterceptored();
    }
	log(val,flag){
		if(flag==1){
			console.log(val)
		}
	}
	ReqInterceptored(){
		let $this = this
		axios.interceptors.request.use(function (config) {//请求拦截器，请求成功之前做你想的事；
			
		    $this.log(config)
		    return config;
		}, function (error) {
		    // Do something with request error
		    return Promise.reject(error);
		});
	}
	ResInterceptored(){
		let $this = this
		axios.interceptors.response.use(function (response) {//响应拦截，响应；
		    $this.log(response,1);
		    return response;
		}, function (error) {
		    return Promise.reject(error);
		});
	}
	post(url,data,callBack){
		let $this = this
		axios.post(url, qs.stringify(data))
		  .then(function (response) {
		  	if(response.status==200){
		  		 callBack(response);
		  	}else{
		  		 MessageBox({
				  title: 'Notice',
				  message: 'Are you sure?',
				  showCancelButton: true
				});
		  	}
		   
		  })
		  .catch(function (error) {
		    $this.log(error,1)
		 });
	}
	get(url,data,callBack){
		let $this = this
	    axios.get(url, qs.stringify(data))
		  .then(function (response) {
		  	if(response.status==200){
		  		 callBack(response.data);
		  	}else{
		  		 MessageBox({
				  title: 'Notice',
				  message: 'Are you sure?',
				  showCancelButton: true
				});
		  	}
		   
		  })
		  .catch(function (error) {
		    $this.log(error);
		 });
	}
}

let http = new Http()
 export default http