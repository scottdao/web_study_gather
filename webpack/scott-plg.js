(function(gobal, fn) {
	/**
	 * 区别运行环境，node/amd/window
	 */
	typeof exports === 'object' && typeof module !== undefined ? module.exports = fn() : typeof define === 'function' &&
		define.amd ? define(fn) : gobal.plg = fn();
})(this, function() {
	function isArray(array) {
		return array instanceof Array || Object.prototype.toString.call(array) === '[object Array]';
	}
	function isFunction(func){
		return func instanceof Function || Object.prototype.toString.call(func) === '[object Function]';
	}
	function isObject(object) {
		
		//null为空对象
		return object !== null && object !==undefined/*(IE)*/ && Object.prototype.toString.call(object) === '[object Object]';
	}
	
	/*
	*number纯数字为true, NaN为false；
	*/
	function isPureNumberOrNaN(value){
		if (typeof (value - 0) === 'number' && !isNaN(value - 0)) {
			return true;
		} else {
			return false;
		}
	}
	function isEmptyObject(emptyObject) {
		//getOwnPropertyNames，可枚举与不可枚举；
		if (Object.getOwnPropertyNames) {
			return Object.getOwnPropertyNames(value).length === 0;
		} else {
			for (var i in emptyObject) {
				if (emptyObject.hasOwnProperty(i)) {
					return false;
				}
			}
			return true;
		}
	}
	function isEmptyArray(emptyArray){
		
		return value.length === 0?true:false;
	}
	/*
	 *判别empty，空Array,object,number,string,undefiend
	 * 空为true 非空为false
	 */
	function isEmpty(value) {
		if (value == null) {
			return true;
		} else if (isObject) {
			return isEmptyObject(value);
		} else if (isArray(value)) {
			return isEmptyArray(value)
		} else {
			return false;
		}
	}
	//数组扁平化 兼容的写法
	function platArray(dataSource, dataArr = []){
		if(!dataSource && !isArray(dataSource)){
			throw new Error(`the dataSource's parameter is ${dataSource}, please writting the right array`);
			return;
		}
		if(dataSource.flat){
			return dataSource.flat(Infinity)
		}else{
			for(var i = 0; i<dataSource.length; i++){
				if(isArray(dataSource[i])){
					platArray(dataSource[i], dataArr)
				}else{
					dataArr.push(dataSource[i]);
				}
			}
			return dataArr;
		}
	}
	//对象扁平化；{a:{b:{c:"jkfjk"}}}=>{"a.b.c":"jkfjk"}
	function platObject(dataSource, dataArr={}, keyDot="", stringTarget="."){
		if(!dataSource && !isObject(dataSource)){
			throw new Error(`the dataSource's parameter is ${dataSource}, please writting the right object`);
			return;
		}
		keyDot = keyDot?keyDot + stringTarget:"";
		for(var i in dataSource){
			if(isObject(dataSource[i])){
				platObject(dataSource[i], dataArr, keyDot+i);
			}else{
				dataArr[keyDot+i] = dataSource[i];
			}
		}
		return dataArr;
	}
	/*
	 * 对象数组扁平化
	*/
	function paltMethods(dataSource){
		if(!dataSource){
			throw new Error(`the dataSource’s parameter  is ${dataSource},please check your current file’s Function parameter!`);
			return;
		}
		if(isObject(dataSource)){//object
			platArray(dataSource)
		}else if(isArray(dataSource)){//array
			platObject(dataSource)
		}else{//其他数据类型，null， undefined
			return dataSource;
		}
	}
	/**
	 * 数组对象浅拷贝
	*/
	function shallowCopyObject(){
		   
	}
   /*
   *数组对象深拷贝
   */
	function deepCopyObject(){
		  
	}
	/**
	 * 防抖函数
	 */
	function debounce(){
		
	}
	/*
	*节流函数
	*/
	function throttle(){
		
	}
	function forEach(){
		
	} 
	function filter(){
		
	}
	function map(){
		
	} 
	function filter(){
		
	}
	//排序方法；
	function sort(sortArr, fn){
		if(!isArray(sortArr)){
			throw new Error(`the sortArr is ${sortArr}, it must be array. please notifice!`);
			return; 
		}
		var x,y = 0;
		var len = sortArr.length;
		for(var i = 0; i<len-1; i++){
			x = sortArr[i+1];
			y = sortArr[i];
			if(fn){
				if(!isFunction(fn)){
					throw new Error(`the fn is ${fn},it must be Function.please notifice!`)
					return; 
				}
				if( fn(x,y) !== undefined ){
					if(fn(x,y)>0){
						sortArr[i] = x;
						sortArr[i+1] = y;
						sortMock(sortArr, fn);
					}
				}else{
					fn()
				}
			}else{
				if(x-y>0){
					sortArr[i] = x;
					sortArr[i+1] = y;
					sortMock(sortArr, fn);
				}
			}
		}
	}
	/**
	 * replace(/(^\d{3})(\d{4})(\d{4}$)/g, "$1****$3");
	 * 
	 */
	function textEncryption(text, targetStr = '*', digit = 4){
		if(!text){
			throw new Error(`the text’s parameter  is ${text},please check your current file’s Function parameter!`);
			return;
		}
		text = text + '';
		var newTargetString = ''
		for(var i = 0;i<digit;i++){
			newTargetString += targetStr;
		}
		var len = text.length;
		var baseNumber = (len-digit)/2
		var firstNumber = Math.floor(baseNumber);
		var lastNumber = Math.ceil(baseNumber);
		var reg = new RegExp(`(^.{${firstNumber}})(.{${digit}})(.{${lastNumber}}$)`, 'g');
		return text.replace(reg, `$1${newTargetString}$3`);
	}
	return {
		isEmpty,
		isArray,
		isObject,
		isEmptyObject,
		isEmptyArray,
		isPureNumberOrNaN,
		platArray,
		platObject,
		paltMethods,
		textEncryption
	}
})
