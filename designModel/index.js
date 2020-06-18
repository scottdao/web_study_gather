// 函数式编程：1.组合大于继承;2:tree-shaking
/**
 * 组合：更加灵活多变，随着业务需求的变化，提升代码质量和性能
 * **/
function a() {}
function b() {
  a();
}

/***
 * 有利于tree-shaking
 * tree-shaking是基于export的文档流做的。
 * tree-shaking的消除原理是依赖于ES6的模块特性。
 * ***/
/***
 *
 * 传window，便于快速查找变量，性能问题。（https://juejin.im/post/5a4dc842518825698e7279a9）
 *
 * 利用作用域链查找变量。
 * **/

/***
 *
 * 命令模式：把具体的指令与实现隔离，调用与执行解耦
 * 做法：将方法、数据分装到单一对象中，调用方和执行方进行解耦，达到职责分离的目的
 * **/
function command() {}
