var webpack = require('webpack');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const apiServer = {
    port: 8080,
    host: 'localhost'
}
let vueConfig = {
    baseUrl: process.env.NODE_ENV === 'production' ?
        '.' : '/',
    chainWebpack: (config) => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => Object.assign({}, options, {
                name: 'img/[name].[ext]'
            }));
    },
    css: {
        extract: {
            filename: 'css/[name]-[hash].css',
            chunkFilename: 'css/[name]-[hash].css',
        },
        modules: false,
        loaderOptions: {
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            sass: {
                data: `@import "./variables.scss";`
            }

        }
    },

    devServer: {
        hot: true,
        //inline: false,//浏览器信息输出日志，lazy,懒加载，不会监听任何文件的改变，会与热更新hot冲突。
        //port: 8080,
        //host:'127.0.0.1',
        clientLogLevel: 'none',
        contentBase: './dist',
        historyApiFallback: true,
        //compress: true,
        proxy: { //本地代理插件
            '/api': {
                target: 'http://www.douban.com', //设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        }
    },
    configureWebpack: {
        output: {
            filename: 'js/[name]-[hash].js',
            chunkFilename: 'js/[name]-[hash].js'
        },
        plugins: [
            new webpack.ProvidePlugin({ //引入成为全局模块
                $$: "jquery",
                jquery: "jquery",
                "window.jquery": "jquery",
                //"http": 'Component/http.js'
            }),

        ]
    }
}
if (process.env.NODE_ENV !== 'production') vueConfig.configureWebpack && vueConfig.configureWebpack.plugins.push(new openBrowserPlugin({
    url: `http://${apiServer.host}:${apiServer.port}`,
    browser: 'Google Chrome',
    delay: 0,
    ignoreErrors: 'true'
}));
module.exports = vueConfig