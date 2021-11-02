/**
 * loader: webpack只支持js和json两种文件，loaders为了解决webpack能支持除js和json以外的文件模块，并把他加到文件依赖图中
 * **/
/**
 * plugin：用于bundle文件优化，资源管理和环境变量注入，作用于整个构建过程
 * **/
/****
 * 热更新原理
 * webpack compile:将js编译成Bundle
 * HMR server: 将热更新的文件注入到 HMR runtime
 * HMR runtime: 会注入到浏览器，更新文件变化
 * builder server: 把文件提供给浏览器访问
 * 启动阶段：webpack compiler ---- bundler server  --注入到--- HRM runtime（builder.js）
 * 文件更新阶段：webpack compiler ---- HMR server ---更新到模块代码--- HMR runtime （builder.js）
 * **/

/**
 * 文件指纹
 * chunkHash: 一般用于js，只更新变动过的js文件
 * hash: 文件更新，全部更新
 * contentHash：更新变动过模块内容，不变的则不更新，一般用于css文件
 * **/
// const a = 123
// import asc from 'loader'