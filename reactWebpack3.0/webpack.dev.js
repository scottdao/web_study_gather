 const merge = require('webpack-merge');//代码合并插件
 const common = require('./webpack.common.js');//引入公共插件
//引入webpack
const webpack = require('webpack');
//引入打开浏览器插件；
const openBrowser = require('open-browser-webpack-plugin');
//引入html模板插件；
const htmlWebpackPlugin = require('html-webpack-plugin');

const webpackServer = {
	protocol:'http://',
	host:'localhost',
	//host:'192.168.1.66',
	port:'8080'
}
module.exports = merge(common, {
	cache:true,
	devtool: 'inline-source-map',
	devServer: {
		host: webpackServer.host,
		port: webpackServer.port,
		historyApiFallback: true, //不跳转
	    inline: true,
	    hot: true,
		lazy: false,
		compress: true,
		quiet:false,
		noInfo:false,
		overlay: {
			warnings: true,
			errors: true
		},
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
	    contentBase:'./build'
},
plugins:[
		new openBrowser({
			url:webpackServer.protocol+webpackServer.host+':'+webpackServer.port
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
]
})