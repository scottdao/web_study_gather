'use strict';
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin= require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// console.log(CleanWebpackPlugin)
const config = {
    entry: {index:'./src/index.js',search:'./src/search.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode:"production",
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: 'babel-loader'
            },
            // {
            //     test:/\.css$/,
            //     use:[
            //         MiniCssExtractPlugin.loader,
            //         'css-loader'
            //     ] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
            // },
            {
                test:/\.(less|css)$/,
                use:[
                 MiniCssExtractPlugin.loader,
                'css-loader',
                 {
                    loader:"postcss-loader",
                    options:{
                        plugins:[
                            require('autoprefixer')({
                                overrideBrowsers:['last 2 version', '>%1', 'ios 7']
                            })
                        ]
                    }
                },
                'less-loader',
               
                ] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
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
                use:{
                    loader:'file-loader',
                    options: {
                        limit: 2048,
                        name: path.posix.join('imgs/[name].[hash:8].[ext]'),
                        // 图片的hash跟css和js的hash概念不一样，图片的hash,md5由图片内容来决定，css/js只要有文件变化，整个项目都会发生变化。
                    }
                }
            }
        ]
    },
    plugins: [
       new MiniCssExtractPlugin({
           filename:'[name]_[contenthash:8].css'
       }),
       new OptimizeCssAssetsWebpackPlugin({
           assetNameRegExp:/\.css$/g,
           cssProcessor:require('cssnano')
       }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
         template: path.join(__dirname, '/src/index.html'),
         filename:'index.html',
         chunks:['index'],
         inject:true,
         minify:{
             html5:true,
             collapseWhitespace:true,
             preserveLineBreak:false,
             minifyCSS:true,
             minifyJS:true,
             removeComments:false
         }
        
        }),
         new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/search.html'),
            filename:'search.html',
            chunks:['search'],
            inject:true,
            minify:{
                html5:true,
                collapseWhitespace:true,
                preserveLineBreak:false,
                minifyCSS:true,
                minifyJS:true,
                removeComments:false
            }
        }),
    ],
};

module.exports = config