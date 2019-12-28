//链表实现

// 创建链表
function CreateListNode(data, next, pre) {
  this.data = data;
  this.preNode = pre;
  if (this.preNode) {
    pre.nextNode = this;
  }
  this.nextNode = next;
}
