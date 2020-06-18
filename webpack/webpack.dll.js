const webpack = require('webpack');
const dependencies = require('./package.json');
console.log(dependencies);
module.exports = {
  entry: {
    vender: [
      'jquery',
      'lodash',
      'antd-mobile',
      'babel-polyfill',
      'whatwg-fetch'
    ]
  },
  output: {
    path: __dirname + '/statics/dll',
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: __dirname + '/statics/dll/[name]-manifest.json',
      name: '[name]_library',
      context: __dirname
    })
  ]
};
