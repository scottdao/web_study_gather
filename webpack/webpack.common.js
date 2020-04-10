const path = require('path');
//console.log(path)
const webpack = require('webpack');
//console.log(webpack)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js']
  }, //入口文件
  output: {
    //出口文件
    //filename: '[name].build.js',
    filename: 'js/[name].[chunkhash].js', // hash为了解决缓存，帮助浏览器判断文件是否更新；
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'js/[id].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      // Component: path.resolve(__dirname, 'app/component/'), //代替模块路径
      // Style: path.resolve(__dirname, 'app/style/'),
      // Router: path.resolve(__dirname, 'app/router/'),
      // Src: path.resolve(__dirname, 'app/src/'),
      // Image: path.resolve(__dirname, 'app/image/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader' //Rule.use可以是应用于模块的UseEntry数组。每个条目指定要使用的加载器。
          // 匹配该后缀类型所有文件，获取文件的内容，并return出来
        },
        exclude: /node_modules/ //条件必须不匹配
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            limit: 2048,
            name: path.posix.join('img/[name].[hash:8].[ext]')
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
      // favicon: './app/1.ico'
    }),
    new CleanWebpackPlugin(
      ['dist'], //匹配删除的文件
      {
        root: __dirname, //根目录
        verbose: true, //开启控制台输出信息
        dry: false //启用删除文件
      }
    ),
    new webpack.ProvidePlugin({
      //引入成为全局模块
      $: 'jquery',
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      //设置全局常量
      ENV: JSON.stringify(process.env.NODE_ENV),
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '5fa3b9',
      'typeof window': JSON.stringify('object'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./statics/dll/vender-manifest.json')
    })
  ]
};
