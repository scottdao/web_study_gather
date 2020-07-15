#### 冒烟测试
- 测试打包后的基本文件是否成功。
- 安装`ramraf`和`mocha`库;
- 基本配置
- 测试用例
- 冒烟测试脚本
#### 单元测试
- 安装mocha + chai
 `npm i mocha chai -D`
- 新建 test 目录， 并增加xxx.test.js测试文件
- 在 package.json中的scripts字段增加test命令
```
“script”：{
    ”test“:"node_modules/mocha/bin/_mocha"
}
```
- 执行测试命令
 `npm run test`
##### 参考文档
- [mocha](https://mochajs.org/) 

