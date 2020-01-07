/**
 *
 * 循环队列
 *
 * 击鼓传花实现
 *
 * ***/

var queues = require("../queue.js");

var Queue = queues.Queue;

function beatDrumFlower(nameList, num) {
  var queue = new Queue();
  for (var i = 0; i < nameList.length; i++) {
    queue.enQueue(nameList[i]);
  }
  var eliminate;
  while (queue.size() > 1) {
    for (var m = 0; m <= num; m++) {
      // 实现列队循环
      queue.enQueue(queue.outQueue());
    }
    eliminate = queue.outQueue();
    console.log(`每次被淘汰${eliminate}`);
  }
  console.log(`胜利者${queue.front()}`);
  console.log(queue.size());
}

beatDrumFlower(["ldy", "dao", "scott", "sLdy", "less", "hone"], 6);
