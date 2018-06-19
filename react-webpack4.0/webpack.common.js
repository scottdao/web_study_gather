const path = require('path');
//console.log(path)
const webpack = require('webpack');
//console.log(webpack)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		app:['babel-polyfill','whatwg-fetch','./app/index.jsx']
	}, //入口文件
	output: { //出口文件
		filename: '[name].build.js',
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
				use:ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:[ {
		                loader: 'css-loader',
		                options: {
		                    url: false,
		                    minimize: true,
		                    sourceMap: true
		              }
           		    }, 
           		    {
		                loader: 'sass-loader',
		                options: {
		                    sourceMap: true
		                }
		            }]
				})
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\. (woff|woff2|eot|ttf|otf)$/,
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
		new webpack.ProvidePlugin({//引入成为全局模块
			$$:"jquery", 
			jquery:"jquery",
			"window.jquery":"jquery",
			"http":'./component/http.js'
		}),
		new webpack.DefinePlugin({//设置全局变量
			ENV:JSON.stringify(process.env.NODE_ENV)
		}),
		
		new ExtractTextPlugin({
		    filename:  (getPath) => {
		      return getPath('[name].css').replace('js', 'css');
		    },
		    allChunks: true
		})
	]
};