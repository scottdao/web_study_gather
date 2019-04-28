(function(gobal, fn) {
	/**
	 * 区别运行环境，node/amd/window
	 */
	typeof exports === 'object' && typeof module !== undefined ? module.exports = fn() : typeof define === 'function' &&
		define.amd ? define(fn) : gobal.moment = fn();
})(this, function() {

})
