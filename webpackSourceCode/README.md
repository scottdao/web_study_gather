##### webpack 源码简析
**webpack启动**
- 安装：局部安装, node_modules/.bin下的找到webpack.cmd或者webpack.sh 脚本  
 ###  热更新原理（复习）
 * webpack compile:将js编译成Bundle
 * HMR server: 将热更新的文件注入到 HMR runtime
 * HMR runtime: 会注入到浏览器，更新文件变化
 * builder server: 把文件提供给浏览器访问
 * 启动阶段：webpack compiler ---- bundler server  --注入到--- HRM runtime（builder.js）
 * 文件更新阶段：webpack compiler ---- HMR server ---更新到模块代码--- HMR runtime （builder.js）

###  文件指纹（复习）
 * 文件指纹
 * chunkHash: 一般用于js，只更新变动过的js文件
 * hash: 文件更新，全部更新
 * contentHash：更新变动过模块内容，不变的则不更新，一般用于css文件


### tree shaking(复习)
* 必须是es6语法，commonjs不被支持；
* import作为模块的顶层去出现
* import 只是模块的字符常量，不能动态设置模块的内容
* tree shaking对代码进行静态的分析，打上注释进行标记，uglify阶段删除这些标记无用代码，无法动态分析
* mode进行设置，production开启，开启tree-shaking
* 不能具有副作用，副作用将会对tree-shaking将会失效

### webpack原理：scope hosting(复习)
* import 解析成_webpack_require

### polyfill
* 浏览器支持es语法新特性而产生的

##### webpack打包原理
- webpack命令行 node_modules/.bin/下是否存在webpack.sh或者webpack.cmd,存在执行不存在报错
- 实际入口文件：node_modules/webpack/bin/webpack.js
1. process.exitCode = 0

- webpack-cli 
1. 引入 yargs,定制命令

- Tapable
- webpack编译流程
* entry　option（初始化option）
* run(开始编译)
* make(从entry开始递归的分析依赖，对每个依赖模块进行build)
* before-resolve(对模块位置进行解析)
* build-module(开始构建某个模块)
* normal-module-loader(将loader加载的完成的module进行编译，生成ast树)
* program(遍历ast,当遇到ast语法树收集依赖)
* seal(所有的依赖 build完成，开始优化)
* emit(输出dist文件目录)

- webpack准备阶段
*  entryOptionPlugin初始化 将插件挂在complier对象
- webpack模块构建 make
* complier中调用compilation生命周期函数
* moduleFactory- normalModuleFactory和contextModuleFactory(./b/a路径)
* parse（arcon进行优化）
- webpack文件生成阶段
* 
### 手写简易的webpack
- babylon:`babylon.parser`获取ast语法树；
- babel-traverse:
###  webpack5的优化
1. tree-shaking嵌套优化
2. 支持生成es6代码
3. 模块联邦
    - 一个javascript的应用在运行过程中动态加载另一个应用的代码，并支持共享依赖（CDN）.不再需要本地安装npm包
    - `ModuleFederationPlugin`插件将多个应用结合起来
    - ``
### bundle和bundless
- bundle:只请求一个bundle.js文件
- bundless：请求多个文件；冷启动速度快，HMR更新效率高；文件缓存更优；文件体积有大多，变化不大；
### vite构建原理
```

```
