// 堆栈
/**
 * 后进先出LIFO
 * 数组实现堆栈的方案
 * ****/
function Stack() {
  var items = [];
  // 进栈
  this.push = function(value) {
    items.push(value);
  };

  // 出栈
  this.pop = function() {
    return items.pop();
  };

  // 返回栈顶的元素

  this.peek = function() {
    return items[items.length - 1];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.size = function() {
    return items.length;
  };
  this.clear = function() {
    items = [];
  };
  this.print = function() {
    console.log(items.toString());
  };
}

module.exports = Stack;
