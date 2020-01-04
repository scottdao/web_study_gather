function TwoWayList() {
  // 链表头节点
  var headNode = null;

  // 链表长度
  var nodeLength = 0;

  // 创建节点
  var CreateNode = function(value) {
    this.current = value;
    this.nextNode = null;
    this.preNode = null;
  };

  this.appendNode = function(value) {
    var node = new CreateNode(value);
    var current = null;
    if (headNode) {
      current = headNode;
      while (current.nextNode) {
        current = current.nextNode;
        // if (current.preNode === null) {
        //   current.preNode = current;
        // }
      }

      current.nextNode = node;
      //   node.preNode = current;
    } else {
      headNode = node;
    }
    headNode = current;
    console.log(headNode);
    nodeLength++;
  };
  this.insertNode = function(value) {};
  this.indexOf = function(value) {};
  this.delete = function(value) {};
}

var twoList = new TwoWayList();
twoList.appendNode(1);
twoList.appendNode(2);
twoList.appendNode(3);
twoList.appendNode(4);
twoList.appendNode(5);
// console.log(twoList);
