const path = require('path');
const webpack = require('webpack');
const ramraf = require('rimraf');
const Mocha = require('mocha');
process.chdir(path.join(__dirname, '../../'));
const mocha = new Mocha({
    timeout:"10000ms"
})
ramraf('./dist',()=>{
    const prodConfig = require('../../lib/webpack.prod.js');
    webpack(prodConfig, (err, stats)=>{
        if(err){
            console.error(err);
            process.exit(2);
        }
        console.log(stats.toString({
            colors:true,
            modules:false,
            children:false
        }))
        console.log('webpack test')
        mocha.addFile(path.join(__dirname, 'html-test.js'));
        mocha.addFile(path.join(__dirname, 'css-js-test.js'));
        mocha.run();
    });

 
})