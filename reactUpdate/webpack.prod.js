 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 
 module.exports = merge(common, {
 	devtool: 'source-map',
   plugins: [
     new UglifyJSPlugin({
     	sourceMap: true
     }),
//   new webpack.optimize.CommonsChunkPlugin({
//   	name: 'common' // 指定公共 bundle 的名称。
//   }),
     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin()
   ]
 });