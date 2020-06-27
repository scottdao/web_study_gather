#### 数据结构
- 数据结构是做为程序员必须的了解的必备基础知识，也是必备素养之一，接下来为大介绍比较常见几种的简单基础的数据结构；

##### 堆栈
- 堆栈：这种数据结构，你必须要它的特点就是：后进先出，就好像吃进去的，吐出来一样，这样比喻不文雅，但很形象
- 接下来，我用js为大家实现一下,利用数组实现，便于理解，时间复杂度为o(1), 空间复杂度为o(n)；
```
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
```
- 上面代码我为大家实现了从出栈/进栈/栈长及栈顶元素，用代码为大家实现了遍，大家有空也来撸一撸代码把。

##### 队列
- 队列:先进先出，接下来也是利用数组实现；
- 时间复杂度为o(1), 空间复杂度为o(n)
    ```
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
    ```
- 接下来为大家介绍一下优先队列，那就排队时，有个优先权，可以插队进去。
- **优先队列**
- 空间复杂度为o(n), 时间复杂度o(n)

```
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
```
- 对于上面两种数据结构理解好了，对于前端很多原理，也会豁然开朗，像浏览器原理中事件循环机制还有垃圾回收中栈内存和堆内存回收机制，你也会很快明白一二的，还有栈内存中esp指针的原理等等

##### 链表
- 特点：内存不连续性，这种也是对比于数组具有连续的内存而言的。
- 正是因为这种特性，链表的表长，需要去求解的，链表也就有当前节点和下一个指针next,next指针指向下一个节点，下一个又指向下下一个节点，直到最后一节点的next为null
- 上面描述的正是单向链表，除此之外还有双向链表和循环链表；双向链表就是必单向链表多了一个pre针意味着链表有两条链表分别由next和pre链接而成的
- 循环链表，就是将尾节点的next指针指向头节点head,这样就形成一个大环，称之为循环链表
- 代码实现，以单向链表为例：

```
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
```
- 上面链表实现了链表的添加节点，插入节点，查询节点，删除节点等，对这种数据结构熟悉之后，也让你对react和vue的原理能有更加清晰的认识。

##### 树

- 树呢，二叉树，平衡二叉树，二叉搜索树，堆，原地建堆，及红黑树，本文以二叉搜索树为例，来进行代码实现
- 二叉搜索树的特性：根节点分为左右两个子树，左子树比父节点小，右子树比父节点大；总结为，左小右大。
- 分片实现：树结构:左右子树建好
```
function BinarySearchTree() {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;
}
```
- 为树加叶子节点：
```
  var insertNode = function(node, newNode) {
    // 插入树形节点
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };
  this.insert = function(key) {
    var node = new Node(key);
    if (root === null) {
      root = node;
    } else {
      insertNode(root, node);
    }
  };
```
- 构建二叉搜素树的结构
```
    var tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
```
- 实现树的中序，先序及后序遍历
```
var inOrderTraverseNode = function(node, callback) {
    // 中序遍历
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node, callback);
      inOrderTraverseNode(node.right, callback);
    }
  };
  this.inOrderTraverse = function(callback) {
    // 中序遍历
    inOrderTraverseNode(root, callback);
  };

  // 先序遍历
  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node, callback);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };
  this.preOrderTraverse = function(callback) {
    // 先序遍历
    preOrderTraverseNode(root, callback);
  };

  //后序遍历
  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node, callback);
    }
  };
  //后序遍历
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };
```
- 总结：二叉搜索树就建立成功啦，树这种数据结构，也是使用相对比较频繁的一种数据结构，特别应用于底层框架的开发。

##### 字典
