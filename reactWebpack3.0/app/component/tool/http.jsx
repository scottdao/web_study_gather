import qs from 'qs';
import publicData from './public';

function Http(req,URL){
	//私有属性；私有方法；
	this.request = req 
	this.URL = URL;
	this.commonData = publicData.data;
	this.assign = function(data,newData){
			for(var i in newData){
				data[i] = newData[i]
			}
			return data;
	};
	var isToken = function(data,that){

		var token = '12345678';

		if(token !='undefined' && token != null ){that.assign(data,{access_token:token});}

		return data;
	};
	var isUrl = function(url,that){
		// var $url = this.URL;
		if(/(^https?:\/\/)|(^\d{3}.\d{1,3}.\d{1,3}.\d{1,3}:\d{0,4})/.test(url))return url;

		else url = that.URL + url;

		return url; 

	};
	this.combine = function(url,data){
		var that = this;
		return {
			url:isUrl(url,that),
			data:isToken(data,that)
		}
	};
	return this;
}
Http.prototype.post = function(url,data,callBack,failer){
	data = data ||{};
	url = url || '';
	data = this.assign(data,this.commonData);
	var combine = this.combine(url,data)
	//console.log(combine);
	fetch(combine.url,{
        			 method:'post',
        			 body:qs.stringify(combine.data),
                     mode:'cors',
                     cache: "force-cache",
        			 headers:{
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        			 }
       }).then((res)=>res.json()).then((req)=>{
        		//console.log(req)
        		if(req.code==200){
        			callBack && callBack(req)
        		}else{
        			failer && failer(req)
        		}
        	}).catch((err)=>{
        		console.log(err)

        	})
};
Http.prototype.get = function(url,data,callBack,failer){
	data = data ||{get:'get'};
	url = url || 'get';
	data = this.assign(data,this.commonData);
	var combine = this.combine(url,data)
}	
Http.prototype.scoket = function(argument){
	
};

var http = new Http('request',publicData.api);

export default http;