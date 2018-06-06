const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: {
		app:['babel-polyfill','whatwg-fetch','./app/index.jsx']
	}, //入口文件
	output: { //出口文件
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve:{
		extensions:['.js','.jsx','.json'],
		alias: {
		  Component: path.resolve(__dirname, 'app/component/'),//代替模块路径
		  Style:path.resolve(__dirname, 'app/style/'),
		  Router:path.resolve(__dirname, 'app/router/'),
		  Src:path.resolve(__dirname, 'app/src/'),
		  Image:path.resolve(__dirname, 'app/image/')
		}
	},
	module: {
		rules: [{
				test: /\.(jsx|js)$/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html'
		}),
		new CleanWebpackPlugin(['build']//匹配删除的文件
			,{
			   root:__dirname,//根目录
			   verbose:  true,//开启控制台输出信息
				dry:false//启用删除文件
			}),
	     
		new webpack.ProvidePlugin({
			$$:"jquery",
			jquery:"jquery",
			"window.jquery":"jquery"
		})

	]
};