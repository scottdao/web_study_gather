const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const apiServer = {
    port:4000,
    host:'localhost'
}
module.exports = merge(common, {
    devtool: 'inline-source-map',
    output:{
        publicPath:'/',
    },
    module: {
        rules: [{ test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] }]
    },
   
    devServer: {
        contentBase: './dist',
        hot: true,
        port: apiServer.port,
        inline: true,
        //host: '192.168.0.108',
        host:apiServer.host,
        historyApiFallback: true,
        noInfo: false,
        proxy: { //通过代理解决本地跨域
            '/api': {
                target: 'http://api.wawa.kinlink.cn/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
                        // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
                }
            }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
	    new openBrowserPlugin({
            url:`http://${apiServer.host}:${apiServer.port}`,
            browser:'Google Chrome',
            delay:0,
            ignoreErrors:'true'
        })

    ]
});
