# [ 官网脚手架 ](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui)

# [vue 配置文件](https://cli.vuejs.org/config/#pluginoptions)

## [vue pc 端组件](http://v1.iviewui.com/docs/guide/start)

### [vue-antd](https://okoala.github.io/vue-antd/#!/components)（该项目目测已跪）

#### vue-router;
+ url变化 ->触发js监听事件->改变vue-router的current（react其实是key值）变量->触发监视器监听current（key）变量->current改变就会获取新的组件，并进行渲染
+ hash('#')
  - localtion.hash，onhashchange监听hash值得变化 
+ history API
  -  localtion.history, onpopstate监听history的变化
  -  
+ 组件
  - vue实例
+ solt 插槽
  - 普通插槽
  - 作用域插槽
+ 计算属性与监听属性
  - computed:数据变化时计算并处理逻辑，没变化时，不触发；提高性能。
  - watch:监听数据的变化
+ 响应式更新：
  - getter和setter方法，（watch监听，数据变化没有getter是无法监听到的）。
+ 生命周期
+ jsx与template
  - template
    1.  html模板语法扩展
    2.  内置指令
    3.  cssvue 
    4.  灵活度低
    5.  But 
   - jsx
    1. 灵活
    2. vue逻辑使用jsx
      ```
      ...
      <vNOde :myData="selfName" name='123'/>
      ...
      components:{
        solt,
        nodeB,
        nodeA,
        nodeC,
        vNOde:{
            functional: true,
            render(h, cxt) {
              console.log( cxt)
              return <div>1111:{cxt.props.name}</div>
            }
        }
      ```
+ 指令
  - v-html:解析html
  - v-show:视图显示
  - v-if:判断句
  - v-once:
  - v-on：事件(@)
  - v-for
  - v-bind:属性(:)
  - v-model:双向数据绑定
+ 高级特性
  - provide:组件通信
  - inject:接受数据
  - 