import qs from 'qs';

var tool = {};

function Http(req,URL){
	//私有属性；私有方法；

	this.request = req 
	this.URL = URL;
	this.commonData = {
		version:'',
		os:'web'
	};
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
	data = data ||{post:'123'};
	url = url || 'post';
	data = this.assign(data,this.commonData);
	var combine = this.combine(url,data)
	console.log(combine);
};
Http.prototype.get = function(url,data,callBack,failer){
	data = data ||{get:'get'};
	url = url || 'get';
	data = this.assign(data,this.commonData);
	var combine = this.combine(url,data)
	
Http.prototype.scoket = function(argument){
	
};
var http = new Http('request','www.baidu.com/');
//console.log(http.url);
tool.http = http;
export default tool