function Http(){
	//数据拼接；
	this.jointData = function(jiont){
		let jiontString = ''
		for(let i in jiont){
			 jiontString += i+"="+jiont[i]+"&"
		}
		return jiontString.substr(0,jiontString.length-1);
	}
}
//ajax请求封装
Http.prototype.newAjax = function(option,callback,error){
let	defaultOption =  {
		url:'',
		method:'post',
		data:{},
		dataType:'text',
		contentType:'application/json;charset=UTF-8'
	}
	option = option || defaultOption
	callback = callback || 'callback'
	error = error || 'error'
	let setAjax
	//第一步创建ajax对象
	if(window.XMLHttpRequest){
		 setAjax = new XMLHttpRequest();
	}else{
		 setAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	let newData = null
	if(/^get$/i.test(option.method)){
		const newUrl=option.data?(JSON.stringify(option.data)=='{}'?option.url:option.url+'?'+this.jointData(option.data)):option.url
		//调取方法，open方法；
		setAjax.open(option.method,newUrl,true);
	}else if(/^post$/i.test(option.method)){
		setAjax.open(option.method,option.url);
		let contentType = option.contentType?option.contentType:defaultOption.contentType;
		setAjax.setRequestHeader("Content-type",contentType);
		//通过Content-type字段拼接设置数据；
		if(contentType=='application/json;charset=UTF-8'){
			newData = JSON.stringify(option.data)
		}else if(contentType=='application/x-www-form-urlencoded;charset=UTF-8'){
		    newData = option.data?(JSON.stringify(option.data)=='{}'?null:this.jointData(option.data)):null
		}
		
	}
	setAjax.send(newData);
	//监听状态请求；
	setAjax.onreadystatechange=function(){
     //监听ajax状态码；
     if(setAjax.readyState==4){
     	if(setAjax.status>=200&&setAjax.status<300||setAjax.status==304){
     		
     			let data = option.dataType=='json'?JSON.parse(setAjax.responseText):option.dataType=='XML'?setAjax.responseXML:setAjax.responseText;
     			callback(data);
     	}else{
       		let err = setAjax.responseText?JSON.parse(setAjax.responseText):setAjax.responseText;
     		error(err);
     	}
     }
    }
	//return setAjax
}
Http.prototype.newFetch = function(){
	
}
let http = new Http();

export default http