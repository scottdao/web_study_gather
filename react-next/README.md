### react-next 服务端渲染

- next.js 只支持 react16 版本；
- 自动打包编译 (使用 webpack 和 babel)
- 热加载
- 以 ./pages 作为服务端的渲染和索引
- 静态文件服务. ./static/ 映射到 /static/ (可以 创建一个静态目录 在你的项目中)
- 代码自动分割：每个页面只会导入 import 中绑定以及被用到的代码； 也就是说并不会加载不需要的代码

* css:样式

  - css 样式嵌入:绑定 styled-jsx 来生成独立作用域的 CSS;不支持独立模块作用域 js，意思就是不能将 styled-jsx 抽样出来，独立成块。

    ```
    export default () => (
      <div>
        Welcome to next.js!
        <p>我是scott</p>
        <style jsx>
          {`
            p {
              color: red;
            }
          `}
            </style>
            <pre>
            {cowsay.say({
                text: 'say hello!'
            })}
            </pre>
        </div>
        );
    ```

  - [getInitialProps](https://github.com/zeit/next.js/blob/7.0.0-canary.8/examples/data-fetch/pages/index.js):服务端模块调用

- [预加载](https://github.com/zeit/next.js/tree/7.0.0-canary.8/examples/with-prefetching)：只有在生产环境才有；

### 参考文档

- [next 文档](https://nextjs.frontendx.cn/)
