#### react --- Hooks
##### react 底层概念
1.  **事件系统**
- 合成事件绑定方式
  - 借鉴了原生DOM0事件实现方式而已
  ```
  //原生dom0事件
  <div onclick="clickFunc()"></div>

  // react合成事件
  <div onClick={this.clickFunc}></div>
  ``` 
- 合成事件实现机制：事件委托和自动绑定
  - **事件委派**
    1. 事件代理机制
    2. 不会直接绑定到真实的节点，将事件绑定到最外层的结构，使用一个统一事件监听处理
    3. 组件挂载或者卸载，会统一在事件监听器删除或者插入
    4. 事件发生，在这个统一事件监听器处理，后映射到真正的事件处理函数，并且调用
    5. 总结：简化事件处理和回收机制，提升效率
  - **自动绑定**：在es6和纯函数里自动绑定消失，需要手动绑定
    1. bind绑定方法
    2. 构造器生命
    3. 箭头函数
- 合成事件与原生事件避免混用,可以通过e.target来避免
- 合成事件与原生事件的对比
  - 事件传播与阻止事件传播
    1. 事件传播只实现事件冒泡，未实现捕获 
    2. 阻止事件，e.preventDefault()即可
  - 事件类型：合成事件是原生事件的子集
  - 事件绑定
  - 事件对象：不存在兼容性问题，在事件处理函数中可以合成一个事件对象。
2. **表单**
- 受控组件：组件发生变化都写入到state里去
- 非受控组件：表单组件没有value props，不受state和props控制，一般通过ref prop去获取dom元素
3. **组件通信**
- 没有嵌套关系组件通信，可以引入node.js events模块实现浏览器版
4. **组件间抽象**
- mixin
  - mixin封装方法:实现多重类继承
  ```
    const mixin = function(obj, mixins) {
        const newObj = obj;
        newObj.prototype = Object.create(obj.prototype);
        for (let prop in mixins) {
        if (mixins.hasOwnProperty(prop)) {
        newObj.prototype[prop] = mixins[prop]; }
        }
        return newObj; 
    }
    const BigMixin = { 
        fly: () => {
        console.log('I can fly'); 
        }
    };
    const Big = function() { 
        console.log('new big');
    }
    mixin(BigMixin, Big)
  ```
  - 缺陷：
  1.破坏原有组件的封装
  2.命名冲突
  3.增加复杂性
- 高阶组件
  - 定义： 输入一个组件，输出一个新组件
  - 实现方法：属性代理和反向继承
  1. 属性代理：包裹组件操作props
  ```
    import React, { Component } from 'React';
    const MyContainer = (WrappedComponent) => class extends Component {
    render() {
        return <WrappedComponent {...this.props} />;
    } }
  ```
   
  2. 反向代理：高阶组件继承被包裹的组件
   渲染劫持：控制wrappedComponent的渲染过程，并渲染各种各样的结果。
   控制state
- 组合式组件开发实践
  1. 组件再分离
  2. 逻辑再抽象
- 组件性能优化
  1. 纯函数：
   - 给定相同输入，产生相同的输出
   - 过程没有副作用:不能改变外部的状态(列如：函数内部对象或者数组，函数内部改变对象或者数组，引起外部对象或者数组的变化)
   - 没有额外的状态依赖：方法内的状态只在方法的生命周期内存活。
  2.pureRender
