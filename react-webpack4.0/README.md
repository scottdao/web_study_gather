# webapck4.0+react16.0+es6 语法 ：

## 部分基础

- "private": true,防止意外发布；
- babel 更新的关键：'babel-preset-es2015' ------->'babel-preset-es2017'
- .babelrc 文件变为：es2017
- 安装 scss: node-sass 和 sass-loader 依赖

```
{
	test: /\.(css|scss)$/,
	use: [
		'style-loader',
		'css-loader',
		'sass-loader'
	]

}
```

- extract-text-webpack-plugin:css 分离插件，只需要将版本定位到^4.0.0-beta.0;
- 安装方式：cnpm install --save-dev extract-text-webpack-plugin@next
- webpack.ProvidePlugin 插件:提供全局变量和方法。
- react-router4.0 关键点：

  1.  HashRouter,Route 等几个组件
  2.  单极路由跳转使用**exact**属性
  3.  二级路由及多级路由跳转,需要**strict**属性匹配，必须在一级路由衍生下生成。
  4.  exact（bool）：为 true 时，则要求路径与 location.pathname 必须完全匹配；
  5.  strict（bool）：true 的时候，有结尾斜线的路径只能匹配有斜线的 location.pathname；

```
         <HashRouter >
         	<React.Fragment>
         		<Route exact path="/" component={Login}/>
         		<Route strict path="/index"  component={Index}/>
         		<Route  path='/index/mine' component={Mine} />
         		<Route  path='/index/main' component={Main} />
         		<Route  path='/detail' component={Detail} />
         	</React.Fragment>
         </HashRouter >
```

### es7 语法，class 类中加箭头函数，

- \$ npm install --save-dev babel-preset-stage-0;
- \$ npm install --save-dev babel-preset-stage-1;
- \$ npm install --save-dev babel-preset-stage-2;
- \$ npm install --save-dev babel-preset-stage-3;

## Redux:基础 redux-[api](https://redux.js.org/api)

页面 -> action({type:a,payload:b}) -> reducer((preState,action)=>{}) -> store({})--connect()-> 页面;

涉及界面复杂度(redux-saga)：fetch / api success/failed

## react 相关项目：

1. [共享软屏](https://gitee.com/scottldy/shareWare)

- 说明：这个为私人项目，需经本人同意才能查看。

## jest javascript 测试库
