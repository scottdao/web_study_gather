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
- 安装断言库`assert`
#### 测试覆盖率
- `npm i -D istanbul`测试覆盖率使用会有错误产生
- `npx nyc`进行测试覆盖率测试
 `npm run test`
- 总结：
1. 测试是否生成想要的文件,可以通过`mocha.addFile`进行测试
2. 测试文件的功能，采用断言库去写；
3. 测试覆盖率，可以采用`istanbu`和`nyc`去实现
- 持续集成
 1. 快速发现错误
 2. 防止分支大幅偏离主干
 3. 核心措施:代码集成主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成。
##### 参考文档
- [mocha](https://mochajs.org/) 

