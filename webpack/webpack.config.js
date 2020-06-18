const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'scott-plg',
  template: path.join(__dirname, 'src/index.html')
});

module.exports = {
  entry: {
    app: ['./src/scott-plg.js'],
    jquery: ['jquery'],
    antd: ['antd-mobile'],
    common: ['babel-polyfill', 'whatwg-fetch'],
    lodash: ['lodash']
  },
  output: { filename: 'index.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      //引入成为全局模块
      $: 'jquery',
      _: 'lodash'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3001,
    hot: true
  },
  cache: true
};
