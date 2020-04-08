### react-next 服务端渲染

- next.js 只支持 react16 版本；
- 自动打包编译 (使用 webpack 和 babel)
- 热加载
- 以 ./pages 作为服务端的渲染和索引
- 静态文件服务. ./static/ 映射到 /static/ (可以 创建一个静态目录 在你的项目中)
- 代码自动分割：每个页面只会导入 import 中绑定以及被用到的代码； 也就是说并不会加载不需要的代码

### 参考文档

- [next 文档](https://nextjs.frontendx.cn/)
