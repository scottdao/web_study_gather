## VUE 部分语法

- LeadIndex 页面进行缓存
- exclude 属性表示该页面没有被缓存,通过逗号隔开进行革除缓存处理

1. :exclude="['LeadIndex','Asset']"也能通过动态缓存处理；
2. include 缓存处理，需要缓存的组件；
3. :include="['LeadIndex']"；

---

### 插槽内容：

1.  父级：

```
<PersonCenter>
<span >
个人中心
</span>
</PersonCenter>
```

2. 子级：

```
<span>personCenter</span>
<slot></slot>
```

3. 具名插槽：

- 父级：

```
<PersonCenter>
<span slot='per'>个人中心</span>
<h2 slot='mine'>我的未来</h2>
<h1>疯狂的世界反</h1>
</PersonCenter>
```

- 子级：

```
<slot name='per'></slot>
<slot name='mine'></slot>
```

- ps：未匹配的名字内容，将给抛弃；父级元素中给 slot 属性和子级 slot 给 name 属性。

- 作用域：父级只作用于父级，子级只作用于子级。

---

1. 子父级组件的交互：

- 父——>子：**props**接受；
- 父级中的子组件:`<money :num='num' ></money>`
- 子级：props 接受
- 父：子级---通过$emit自定义事件：this.$emit('dataMy','我是')事件名, 传入的内容
- 父级----通过 v-on 绑定事件名简写@：`<money @dataMy='dataMy'></money>`方法中的参数，为传入的值。

```
dataMy(id){
this.http.log(id,1)
}
```

---

## vuex:状态管；

1. **State**:单一状态数据管理（原始数据);

2. **getters**:对 state 数据进行处理，并根据依赖进行缓存；类似于计算属性；
3. **Mutation**方法：同步函数，会接受 state 作为第一个参数；

- 第一步，引入 vuex npm i --save vuex;
- 第二步，进行模块化加载：import Vuex from 'vuex';
  Vue.use(Vuex);
  在 new vue 对象中，引入；

```
new Vue({
el: '#app',
router,
store,
components: { App },
template: '<App/>'
})
```

- 第三步，在 mutations 属性中，写入同步方法。
  在其他组件中写入`this.$store.commit('decrement'方法名,this.count传入的参数);`
  this.\$store.state 调用 state 值。

4. **Action**方法：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

5. module 模块化：

```
const addMin={
state: {
count: 0
},
getters:{

},
mutations: {//同步调用
increment (state) {
// 变更状态
state.count<10?
state.count++
:
alert('大于10')
},
decrement(state){
state.count>0?
state.count--
:
state.count = 0
}
},
actions: {//异步调用
increment (context,data) {
context.commit('increment')
},
decrement(context,data){
context.commit('decrement')
}
}
}

const store = new Vuex.Store({
modules:{
addMin:method.addMin,
}
})
```

- 各个子级获取值的方法：

```
this.$store.dispatch('increment',this.count)
this.count = this.$store.state.addMin.count;
```
