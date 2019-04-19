(function(gobal, fn) {
	console.log(gobal);
	typeof exports === 'object' && typeof module !== undefined ? module.exports = fn() : typeof define === 'function' &&
		define.amd ? define(fn) : gobal.moment = fn();
})(this, function() {
// 	return {
// 		a:'lsdkf'
// 	}
})
