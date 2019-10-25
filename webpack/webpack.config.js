const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'scott-plg',
  template: path.join(__dirname, 'src/index.html'),
})

module.exports = {
  entry: path.join(__dirname, 'src/scott-plg.js'),
  output:{filename:'index.js'},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin, new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3001,
    hot: true,
  },
  cache: true,
}