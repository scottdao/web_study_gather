const webpack = require('webpack');
const merge = require('webpack-merge');
//const ImageminPlugin = require('imagemin-webpack-plugin').default
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: true, //flase表示无法解析图片路径，
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  optimization: {
    //代码分割插件
    minimize: true,
    splitChunks: {
      chunks: 'async', //all对所有文件处理，async异步导入文件处理，initial只对入口文件处理。
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      // flagIncludedChunks: true,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    // new webpack.HashedModuleIdsPlugin(), // 维持hash的稳定module.id
    new ExtractTextPlugin({
      filename: getPath => {
        return getPath(path.posix.join('[name].css')).replace('js', 'css');
      },
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: __dirname + '/statics',
        to: __dirname + '/dist',
        ignore: ['.*']
      }
    ])
  ]
});
