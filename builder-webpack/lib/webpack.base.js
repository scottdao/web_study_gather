'use strict';
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { entry, htmlWebpackPlugins } = require('./mutli-page-config.js');

const projectRoot = process.cwd(); //根目录重新设置
const config = {
    entry: entry,
    output: {
        path: path.resolve(projectRoot, 'dist'),
        filename:process.env === 'production' ? '[name]_[chunkhash].js':'[name]_[hash].js'
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
                use:[  
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                    ] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
            },
            {
                test:/\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                        plugins: () => [
                            autoprefixer({
                            browsers: ['last 2 version', '>1%', 'ios 7'],
                            }),
                        ],
                        },
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                        remUnit: 75,
                        remPrecision: 8,
                        },
                    },
                ]// 从右向左执行，先将css文件解析好之后，再传递给style-loader
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:{
                    loader:'file-loader',
                    options: {
                        limit: 2048,
                        name: path.posix.join('imgs/[name].[hash:8].[ext]'),
                        // 图片的hash跟css和js的hash概念不一样，图片的hash,md5由图片内容来决定，css/js只要有文件变化，整个项目都会发生变化。
                    }
                },
            },
            {
                test:/\.(woff|woff2|eot|ttf)$/,  
                use: {
                    loader:'file-loader',
                    options: {
                        name: '[name]_[hash:8][ext]',
                    },
                },
               
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css',
        }),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        ...htmlWebpackPlugins,
        function errorPlugin() {
            this.hooks.done.tap('done', (stats) => {
                if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
                    process.exit(1);
                }
            });
        },
    ],
    stats:"errors-only"
};

module.exports = config