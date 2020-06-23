### 热更新原理分析

-  webpack Compile:将js编译bundle文件
- HMR Server:将热更新文件输出给HMR Runtime
- bundle server:提供文件在浏览器的访问
- HMR Runtime:会被注入到浏览器，更新文件的变化
- bundle.js:构建输出文件
- 流程:
  1. 启动时，file systems；通过webpack complier将文件打包， 通过bundle server服务器，提供给浏览器访问bundle.js。
  2. webpack complier 经过HMR server服务端输出文件给HRM runtime 将文件注入到浏览器更新文件的变化，
  3. 最后构建输出bundle.js输出文件，以更新代码；
- HMR Server 是服务端，将js模块的变化通过websocket 消息通知给浏览器
- HRM runtime 是浏览器端，用于接收HMR server传递的模块数据，浏览器可以看到.hot-update.json的文件过来。
- HotModuleReplacementPlugin的作用将HRM runtime 注入到bundle.js使得bundle.js可以和HRM server建立webscoket 的通信连接。