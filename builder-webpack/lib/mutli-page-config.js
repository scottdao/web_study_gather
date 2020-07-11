'use strict';
const path = require('path');
const glob = require('glob'); //多页面打包
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectRoot = process.cwd(); //根目录重新设置
// console.log(projectRoot)
const getMap = () =>{
    const entry = {};
    const htmlWebpackPlugins=[];
    const pages = glob.sync(path.join(projectRoot, '/src/*/index.js'));
    
    pages.map(item=>{
        const pageNames = item.match(/src\/(.*)\/index.js/)
        const pageName = pageNames && pageNames[1];
        entry[pageName] = item
        htmlWebpackPlugins.push( 
            new HtmlWebpackPlugin({
                template: path.join(projectRoot, `/src/${pageName}/index.html`),
                filename:`${pageName}.html`,
                chunks:['vendors', pageName],
                inject:true,
                minify:{
                    html5:true,
                    collapseWhitespace:true,
                    preserveLineBreak:false,
                    minifyCSS:true,
                    minifyJS:true,
                    removeComments:false
                }
            }))
    })
    return{entry, htmlWebpackPlugins}
}
const {entry, htmlWebpackPlugins} = getMap();
module.exports = {
   entry, htmlWebpackPlugins
}