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
