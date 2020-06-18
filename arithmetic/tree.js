/**
 * tree:二叉树与二叉搜索树（BST）
 * 二叉搜索树：左节点比父节点小，右节点比父节点大或等于父节点
 * ***/

function BinarySearchTree() {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;
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
  this.print = function() {
    console.log(root);
  };
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

  this.maxValue = function() {
    var node = root;
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
  this.minValue = function() {
    var node = root;
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
  var findMinNode = function() {
    var node = root;
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node;
    }
    return null;
  };
  var searchNode = function(node, value) {
    if (node === null) {
      return false;
    }
    if (node.key > value) {
      return searchNode(node.left, value);
    } else if (node.key < value) {
      return searchNode(node.right, value);
    } else {
      return true;
    }
  };
  // 查值
  this.searchValue = function(value) {
    return searchNode(root, value);
  };
  var removeValueNode = function(node, key) {};
  // 删除值；
  this.removeValue = function(value) {};
}
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
tree.insert(25);
var isValue = tree.searchValue(3);
console.log(isValue);
// tree.inOrderTraverse(value => {
//   console.log(value.key + ',');
// });
