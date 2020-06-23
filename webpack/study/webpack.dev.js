'use strict';
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = {
    // watch:true,//默认false，不开启
    // watchOptions:{// 只有开启监听，该属性才有意义
    //     ignored:/node_modules/,// 默认为空，不监听的文件或者文件夹，支持正则匹配
    //     aggregateTimeout:300,// 监听变化发生后等待300ms再去执行，默认300ms
    //     poll:1000//判断文件是否发生变化通过轮询系统文件有没有文件变化，默认1次/ms;每秒1000次；
    // },
    entry: {index:'./src/index.js',search:'./src/search.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode:"production",
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader'] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
            },
            {
                test:/\.less$/,
                use:['style-loader', 'css-loader', 'less-loader'] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:{
                    loader:'file-loader',
                    options: {
                        limit: 2048,
                        name: path.posix.join('imgs/[name].[hash:8].[ext]'),
                        // 图片的hash跟css和js的hash概念不一样，图片的hash,md5由图片内容来决定，css/js只要有文件变化，整个项目都会发生变化。
                    },
                },
            },
            {
                test:/\.(woff|woff2|eot|ttf)$/,  
                use:'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: './dist',// 基础目录，
        hot:true// 这个配置就没必要配置,热更新插件。
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ],
   
};

module.exports = config