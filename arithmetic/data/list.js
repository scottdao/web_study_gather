// 单向链表实现
// 创建链表
function CreateList() {
  this.headNode = null;
  this.nodeLength = 0;
  // 单向链表实现
  this.createNode = function (value) {
    this.data = value;
    this.nextNode = null;
  };
}
CreateList.prototype.ListLength = function () {
  let headNode = this.headNode;
  let count = 0;
  if (headNode) {
    count = count + 1;
  }
  while (headNode.nextNode) {
    count++;
    headNode = headNode.nextNode;
  }
  return count;
};
// 添加节点
CreateList.prototype.appendNode = function (value) {
  // console.log(this);
  const node = new this.createNode(value);
  let current = null;
  if (!this.headNode) {
    this.headNode = node;
  } else {
    current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = node;
  }
  this.nodeLength++;
};
// 插入节点
CreateList.prototype.insertNode = function (value, location) {
  if (location >= 0 && location <= this.nodeLength) {
    let node = new this.createNode(value);
    let current = this.headNode;
    let count = 0;
    let pre;
    if (location == 0) {
      node.nextNode = current;
      this.headNode = node;
    } else {
      while (count < location) {
        pre = current;
        current = current.nextNode;
        count++;
      }
      node.nextNode = current;
      pre.nextNode = node;
    }
    this.nodeLength++;
    return true;
  } else {
    return false;
  }
};
// 删除位置节点
CreateList.prototype.deleteLocationNode = function (location) {
  if (location >= 0 && location < this.nodeLength) {
    let current = this.headNode;
    let count = 0;
    let pre, next;
    if (location === 0) {
      current = this.headNode.nextNode;
      this.headNode = current;
    } else {
      while (count < location) {
        pre = current;
        current = current.nextNode;
        next = current.nextNode;
        count++;
      }
      pre.nextNode = next;
    }
    this.nodeLength--;
    return true;
  } else {
    console.warn('超出范围');
    return false;
  }
};
// 查询节点是否存在
CreateList.prototype.isNode = function (element) {
  let current = this.headNode;
  let indexFlag = false;
  if (current.data === element) {
    return true;
  }
  while (current.nextNode) {
    current = current.nextNode;
    if (current.data === element) {
      indexFlag = true;
      break;
    }
  }
  return indexFlag;
};
// 查询节点元素位置
CreateList.prototype.indexOf = function (element) {
  const isElement = this.isNode(element);
  if (isElement) {
    let count = 0;
    let current = this.headNode;
    if (current.data === element) {
      return count;
    }
    while (current.nextNode) {
      count++;
      current = current.nextNode;
      if (current.data === element) {
        break;
      }
    }
    return count;
  } else {
    return -1;
  }
};
// 删除元素节点
CreateList.prototype.deleteElementNode = function (element) {
  // 判断元素值是否存在
  const isElement = this.isNode(element);
  if (isElement) {
    let current = this.headNode;
    let pre;
    let count = 0;
    if (current.data === element) {
      this.headNode = current.nextNode;
    }
    pre = current;
    current = current.nextNode;
    while (current) {
      if (current.data === element) {
        pre.nextNode = current.nextNode;
        current = current.nextNode;
        this.nodeLength--;
        count++;
      } else {
        pre = current;
        current = current.nextNode;
      }
    }
    return count;
  } else {
    console.warn('元素节点不存在');
    return false;
  }
};
// 转换成字符串
CreateList.prototype.toString = function () {
  let data = this.headNode.data;
  let current = this.headNode.nextNode;
  while (current) {
    data += `,${current.data}`;
    current = current.nextNode;
  }
  return data;
};
const list = new CreateList();
list.appendNode(1);
list.appendNode(2);
list.appendNode(3);
list.appendNode(4);
list.appendNode(5);
list.appendNode(6);
list.appendNode(4);
list.insertNode(9, 3);
list.insertNode(3, 0);
/* 
*****
  test
*****
list.appendNode(1);
list.appendNode(2);
list.appendNode(3);
list.appendNode(4);
list.appendNode(5);
list.appendNode(6);
list.appendNode(4);
list.appendNode(4);
list.appendNode(4);
list.appendNode(4);
list.appendNode(4);
list.insertNode(9, 3);
list.insertNode(3, 0);
list.deleteLocationNode(3);
console.log("length", list.toString());
list.deleteElementNode(4);
const index = list.indexOf(6);
console.log("length", list.toString());
console.log(index);
*/

module.exports =  list;
