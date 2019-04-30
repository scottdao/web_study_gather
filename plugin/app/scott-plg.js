(function(gobal, fn) {
	/**
	 * 区别运行环境，node/amd/window
	 */
	typeof exports === 'object' && typeof module !== undefined ? module.exports = fn() : typeof define === 'function' &&
		define.amd ? define(fn) : gobal.plg = fn();
})(this, function() {
	function isArray(array) {
		return array instanceof Array || Object.prototype.toString.call(array) === ['object Array'];
	}

	function isObject(object) {
		//null为空对象
		return object !== null && Object.prototype.toString.call(value) === ['object Object'];
	}

	function isEmptyObject(emptyObject) {
		//keys,可枚举；
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

	return {
		isEmpty,
		isArray,
		isObject,
		isEmptyObject,
		isEmptyArray
	}
})
