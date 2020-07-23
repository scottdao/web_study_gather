### webpack react
- webpack 模块打包器
- **entry**:依赖入口
- **ouput**:打包文件进行输出，存在磁盘
    1. 单入口
    ```
    const config = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        }
    };
    module.exports = config
    ```
    2. 多入口: [name]// 占位符
    ```
    const config = {
    entry: {app:'./src/index.js', search:'./src/search.js'},
    output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        }
    };

    module.exports = config
    ```
- **loaders**：webpack只支持js和json两种文件，通过loaders去支持其他类型文件，把他们转化为有效的模块，并添加到依赖图中去。
  1. loaders本身是一个函数，接受源文件作为参数，并返回转换结果
  ```
    const path = require('path');
    const config = {
        entry: {index:'./src/index.js',s:'./src/s.js'},
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        module:{
            rules:[{
                test:/\.txt/, use:'raw-loader'// test 指定匹配规则；use 指定使用loader的名称
            }]
        }
    };
  ```
  2. babel-loader:解析es6语法；`npm i -D @babel/core  @babel/preset-env babel-loader`;
     - [创建.babelrc文件](./.babelrc)；
  3. 解析react jsx; `npm install react react-dom @babel/preset-react -D`;
  4. 解析css loder;
     - css-loader 用于加载.css文件，并且转换成commonjs对象, `npm install css-loader -D`
     - styled-loader 将样式通过`<style >`标签插入到head中, `npm install style-loader -D`
     - less-loader 加载预处理器,`npm install less-loader -D`
     ```
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader'] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
            },
            {
                test:/\.less$/,
                use:['style-loader', 'css-loader', 'less-loader'] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
            }
     ```
    5. file-loader:用于文件处理
        ```
         {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:{
                    loader:'file-loader',
                    options: {
                        limit: 2048,
                        name: path.posix.join('imgs/[name].[hash:8].[ext]'),
                    },
                },
            },
            {
                test:/\.(woff|woff2|eot|ttf)$/,
                use:'file-loader'
            }
        ```
    6. url-loader:处理图片和字体，将小资源图片转码成base64
- **watch**:监听文件的变化，缺陷需要手动刷新页面，更新。
    1. 原理：轮询判断文件的最后编辑时间是否发生变化，某个文件发生变化时，并不会立即告诉监听者，而是先缓存起来，等aggregateTimeout
    2. 将文件存于磁盘空间
    ```
    module.exports={
        watch:true,//默认false，不开启
        watchOptions:{// 只有开启监听，该属性才有意义
            ignored:/node_modules/,// 默认为空，不监听的文件或者文件夹，支持正则匹配
            aggregateTimeout:300,// 监听变化发生后等待300ms再去执行，默认300ms
            poll:1000//判断文件是否发生变化通过轮询系统文件有没有文件变化，默认1次/ms;每秒1000次；
        },
    }
    ```
- **webpack-dev-server**:热更新，
    1. `npm i webpack-dev-server -D`
    2. WDS:不刷新浏览器，自动更新页面;不输出文件，而是放在内存中；`HotModuleReplacementPlugin`
    3. WDM:将webpack 输出文件传输给服务器，适用于灵活的定制场景
       - `npm i webpack-dev-middleware -D`
    4. [热更新的原理](./md/HMR.md)
- **文件指纹之hash**:打包后输出文件名后缀，为了用于文件版本管理，也是用于浏览器缓存
    1. hash：和整个项目构建相关，只要项目文件有修改，整个项目构建的hash值就会更改。
    2. chunkhash:和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值。
    3. contenthash: 根据文件内容来定义hash，文件内容不变，则contenthash不变。
       - 一段代码里有css又有js代码，如果根据chunkhash，只是改变js代码，后面生成的css代码生成css文件，也会发生变化，这个时候chnkhash就没有太多的必要；
       - contenthash是根据内容的变化来确定文件变化，js代码变化，css代码未变化，css使用contenthash
    4. 
- **plugins**:插件用于bundle文件优化，资源管理和环境变量的注入，作用于整个过程 
  1. mini-css-extract-plugin:`npm i mini-css-extract-plugin -D`,将css代码提取css文件,
  2. css文件压缩：`npm i optimize-css-assets-webpack-plugin cssnano -D`,
        ```
                new OptimizeCssAssetsWebpackPlugin({
                assetNameRegExp:/\.css$/g,
                cssProcessor:require('cssnano')
            })
        ```
   3. html文件压缩：`html-webpack-plugin`,文件模板并压缩打包；
    ```
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
    ```
    4. 清除目录文件：`clean-webpack-plugin`
    5. postcss插件自动补齐css3的前缀:[`autoprefixer`](https://caniuse.com/)
        - `postcss-loader autoprefixer`
    6. rem 转换:px2rem-loader:`npm i px2rem-loader -D`,`npm i lib-flexible -S`;
    7. 资源内联：`raw-loader`内联html,内联js
        ```
        <%= require('raw-loader!./meta.html') %>
        <title>Document</title>
        <script>
            <%= require('raw-loader!babel-loader!../node_modules/lib-flexible/flexible.js') %>
        </script>
        ```
       - 代码层面：页面框架初始化脚本，上报相关打点，css内联避免页面闪动；
       - 请求层面：减少http网络请求，小图片或者字体内联(url-loader)；
       - style-loader:内联css；html-inline-css-webpack-plugin;
    8. [多页面打包](./md/多页面打包.md)
- **source-map**:通过source-map定位源码，开发环境开启，线上环境关闭
    1. 线上排查问题得时候可以将sourcemap上传到错误监控系统；
    2. eval:使用eval包裹模块代码
    3. source map:产生.map文件
    4. cheap:不包含列信息
    5. inline:将map作为dataURI嵌入，不单独生成.map文件
    6. module: 包含loader的sourcemap
-  **scope hosting:** 通过mode:production开启webpack.optimizi.ModuleConcatenationPlugin插件
    1. webpack打包机制：打包成一个匿名函数；modules是一个数组，每一项是一个模块的初始化函数，模块会被函数包裹，import会被转换成_webpack_require；通过webpack_require加载模块，通过webpack_require_(0)进行启动程序。
    2. 原理：将模块所有代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突。
    3. 对比：通过scoping hotsing 可以减 少函数声明代码和内存开销。
- **代码分割：**
    1. 适用场景：1.抽离相同代码到一个共享块；2.脚本懒加载，使得初始化下载代码更小;
    2. commonjs:require.ensure;es6:动态import需要babel转换;
    3. 用法: `npm i @babel/plugin-syntax-dynamic-import -D`;
    4. 代码动态加载；
- **eslint:**Airbnb:eslint-config-airbnb; 
    1. 基于ealint:recommoend配置并改进
    2. 能够帮助发现代码错误的规则，全部开启
    3. eslint 落地执行：
    4. ci/cd集成：lint pipline
    5. 本地开发:husky;`npm install husky -D`
    ```
        "scripts": {
            "precommit":"lint-staged"
        },
        "lint-staged":{
            "linters":{
            "*.{js,scss}":["eslint --fix", "git add"]
            }
        },
    ```
    6. eslint:`npm install  eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-airbnb -D`;`npm i eslint-loader babel-eslint -D`;
    7. 打包基础库：
    8. stats：打包输出日志设置；stats:errors-only;输出错误日志；`npm i friendly-errors-webpack-plugin -D`
    9. webpack-merge库:
    10. webpack-bundle-analyzer:代码库包的体积大小的分析
    11. speed-measure-webpack-plugin：可以看到每个loader和插件得耗时
#### webpack4.0 优化原因
- v8带来的优化(for of 代替 foreach/ map和set代替object/includes代替indexOf)
- 默认使用更快的md4 hash算法
- webpack AST 可以直接从loader传递给AST， 减少解析时间
- 使用字符串方法代替正则表达式 

#### webpack 多进程多实例优化
- HappyPack多进程解析资源:在webpack4.0使用需要将happypack5.0引入
   - 原理：每次webpack 解析一个模块,Happypack会将它的依赖分配给worker线程中
```
 module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: [
                    'happypack/loader'
                  
                     ]
            },
            ....
 }
new Happypack({
     loaders:['babel-loader']
}),
```
- webpakc4.0:thread-loader解析资源
    - 原理:每次webpack解析一个模块，thread-loader会将它及它的依赖分配给worker线程中
    ```
    {
        loader:"thread-loader",
        options:{
            workers:3
        }
    }
    ```
- extrenals:分包插件，`html-webpack-externals-plugin`,`splitchunks`;
    - dllPlugin分包: `dllReferencePlugin`对`manifest.json`引用;
    思路：将react,react-dom等基础包提取出来，单独引入；
```
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
```
- 在html阶段中单独引入；
#### 缓存，减少二次构建速度
```
babel-loader?cacheDirectory=true //babel缓存
// 开启压缩缓存：terserWebpackPlugin
// 模块缓存：hard-source-webpack-plugin
```
#### 缩少构建目标
- 目的:尽可能的少构建模块
- babel-loader不解析node_modules 
- 优化resolve.modules的配置
- 优化resolve.mainFields配置
- 优化resolve.extensions配置
#### tree shaking
- 删除无用css: PurifyCSS 遍历代码 识别无用的css class
 1. purgecss-webpack-plugin和mini-css-extract-plugin配合使用   
- uncss: html需要通过jsdom 加载，所有的样式通过postCss解析，通过document.querySelector来识别html文件里面不存在的选择器
#### 图片压缩
- 基于node库的imagemin或者tinypng API
使用:配置image-webpack-loader
#### 动态polyfill.io官方提供服务
- polyfill servers：polyfill.min.js根据浏览器下发不同的proyfill.min.js的内容，来兼容不同浏览器对es6语法的兼容；
- **mode**:用来指定当前构建环境:production/development/none,设置mode可以使用webpack内置函数，默认值为production

- 参考文档
- [webpack](https://webpack.js.org/)
- 极客时间
  