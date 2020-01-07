// 列队
/**
 * 列队---先进先出FIFO，先来先服务
 * 数组实现列队的方案
 * ****/

function Queue() {
  var items = [];

  // 进队列
  this.enQueue = function(value) {
    items.push(value);
  };

  // 出队列
  this.outQueue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };
  this.clear = function() {
    items = [];
  };
  this.size = function() {
    return items.length;
  };
  this.print = function() {
    console.log(items);
  };
}
// var queue = new Queue();
// queue.enQueue(1);
// queue.enQueue(2);
// queue.enQueue(1);
// queue.enQueue(1);
// queue.enQueue(3);
// queue.enQueue(1);
// queue.print();
// queue.outQueue();
// queue.print();

// 最优先列队---- 堆
function PriorityQueue() {
  var items = [];
  function QueueElement(value, priority) {
    this.value = value;
    this.priority = priority;
  }
  this.enQueue = function(value, priority) {
    var queueElement = new QueueElement(value, priority);
    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var isAdd = false;
      for (var i = 0; i < this.size(); i++) {
        if (items[i].priority > queueElement.priority) {
          items.splice(i, 0, queueElement);
          isAdd = true;
          break;
        }
      }
      if (!isAdd) {
        items.push(queueElement);
      }
    }
  };
  this.outQueue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };
  this.clear = function() {
    items = [];
  };
  this.size = function() {
    return items.length;
  };
  this.print = function() {
    console.log(items);
  };
}

// var priorityQueue = new PriorityQueue();
// priorityQueue.enQueue("daoyun", 0);
// priorityQueue.enQueue("daoyun3", 3);
// priorityQueue.enQueue("daoyun1", 1);
// priorityQueue.enQueue("daoyun2", 2);
// priorityQueue.enQueue("daoyun1", 7);
// priorityQueue.enQueue("daoyun1", 6);
// priorityQueue.enQueue("daoyun1", 5);
// priorityQueue.enQueue("daoyun1", 4);
// priorityQueue.print();

module.exports = {
  Queue,
  PriorityQueue
};
