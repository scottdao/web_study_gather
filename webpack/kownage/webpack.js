/***
 *
 * webpack编译原理流程
 *
 * **/

// 1. webpack 配置处理；错误处理增加默认配置
// 2. 编译前工作准备工作：处理插件，初始化complier，etc
// 3. 开始编译主入口
// 4. resolve :解析文件路径&& loader
// 5. loaders:逐个执行
// 6. parse阶段：文件转为ast语法树，解析出import和export
// 7. 递归处理依赖，resolve解析文件的依赖
// 8. module 优化及增加id
// 9. 生成chunk，决定每个chunk中的包含的module
// 10. 生成文件
// 11. 写文件

/***
 *
 * Tapable:提供hook，分为同步和异步两个大类
 * hook原理：
 * hook 事件注册 ——> hook 触发 ——> 生成 hook 执行代码 ——> 执行
 *
 * ***/

/*****
 *
 * resolve:文件路径解析
 *
 *解析loader路径及文件路基
 *解析loader路径,不关心loader的配置
 * 1. 解析行内loader 2. 获取loaderResolver
 * 解析文件路径
 * 1. 普通文件 rquest  2. 获取normalResolve
 *
 * **/
/**
 *
 * loader:
 * 首先处理 inlineLoaders，对其进行解析，
 * 获取对应的 loader 模块的信息，
 * 接下来利用 ruleset 实例上的匹配过滤方法对 webpack.config 中配置的相关 loaders 进行匹配过滤，
 * 获取构建这个 module 所需要的配置的的 loaders，并进行解析，这个过程完成后，便进行所有 loaders 的拼装工作，
 * 并传入创建 module 的回调中。
 * **/
/***
 * module
 *
 *
 *
 * ***/
