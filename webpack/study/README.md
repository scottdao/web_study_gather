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
- **plugins**:插件用于bundle文件优化，资源管理和环境变量的注入，作用于整个过程 
  1. 
- **mode**:用来指定当前构建环境:production/development/none,设置mode可以使用webpack内置函数，默认值为production

- 参考文档
- [webpack](https://webpack.js.org/)
- 极客时间
  