const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
     hot: true,
     port: 3000,
     inline: true,
     host: 'localhost'
   },
   plugins: [
		new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
	]
});
