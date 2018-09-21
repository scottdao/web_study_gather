import http from './http'
function Tool(){
	http.constructor.call(this,http.request,http.URL)
}
Tool.prototype.post = function(url,data,callBack,failer){
	console.log(arguments);
	console.log(typeof arguments[2]);
	if(typeof arguments[1] ==='object')data = arguments[1];

	else if(typeof arguments[1] === 'function')data = {};callBack = arguments[1];
	http.post.call(this,url,data,callBack,failer);
};

var tool = new Tool();
tool.post('good/goods-list',{},function(req){
	console.log(req);
})

export default tool;
