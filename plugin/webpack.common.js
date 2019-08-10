const path = require('path');
//console.log(path)
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: ['./app/index.js'],
        jquery: ['jquery'],
        antd: ['antd-mobile'],
        common: ['babel-polyfill', 'whatwg-fetch']
    }, //入口文件
    output: { //出口文件
        //filename: '[name].build.js',
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            Component: path.resolve(__dirname, 'app/component/'), //代替模块路径
            Style: path.resolve(__dirname, 'app/style/'),
            Router: path.resolve(__dirname, 'app/router/'),
            Src: path.resolve(__dirname, 'app/src/'),
            Image: path.resolve(__dirname, 'app/image/')
        }
    },
    module: {
        rules: [{
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        limit: 2048,
                        name: path.posix.join('img/[name].[hash:8].[ext]')
                    }
                }
            },
            {
                test: /\. (woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),
        new CleanWebpackPlugin(['dist'] //匹配删除的文件
            , {
                root: __dirname, //根目录
                verbose: true, //开启控制台输出信息
                dry: false //启用删除文件
            }),
        new webpack.ProvidePlugin({ //引入成为全局模块
            $$: "jquery",
            jquery: "jquery",
            "window.jquery": "jquery",
            //"http": 'Component/http.js'
        }),
        new webpack.DefinePlugin({ //设置全局变量
            ENV: JSON.stringify(process.env.NODE_ENV)
        })
    ]
};