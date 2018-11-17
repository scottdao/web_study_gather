/*const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry: './src/index.js', //入口文件
	output: { //出口文件
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
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
	devtool: 'inline-source-map',
	devServer: {
     	contentBase: './dist',
     	hot: true,
	    port: 3000,
	    inline: true,
	    host: 'localhost'
   	},
   	mode: "production",
	plugins: [
		new HtmlWebpackPlugin({
				template:__dirname+'/src/index.tmpl.html'
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
	]
};*/