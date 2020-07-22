const path = require('path');
const Webpack = require('webpack')
module.exports = {
    entry:{
        library:[
            'react',
            'react-dom',
            "redux",
            "react-redux"
        ],
        plgLib:[
            'antd',
            'lodash',
            'jquery'
        ]
    },
    output:{
        filename:'[name]_[hash].dll.js',
        path:path.join(__dirname, '../build/library'),
        library:'[name]'
    },
    plugins:[
        new Webpack.DllPlugin({
            name:'[name]_[hash]',
            path: path.join(__dirname, '../build/library/[name].json')
        }),
        //  new Webpack.DllPlugin({
        //     name:'[name]_[hash]',
        //     path: path.join(__dirname, '../build/library/[name].json')
        // })
    ]
}