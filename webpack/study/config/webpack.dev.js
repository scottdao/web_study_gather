'use strict';
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { entry, htmlWebpackPlugins } = require('./mutli-page-config.js');
const config = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode:"development",
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
        ...htmlWebpackPlugins
    ],
   devtool:"inline-source-map"
//    devtool:"cheap-source-map"
};

module.exports = config