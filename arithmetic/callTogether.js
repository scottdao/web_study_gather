/**
 * 集合：没有重复元素，没有顺序概念的数组
 *
 * ****/

// 1.创建集合,集合增删改查。

function Set() {
  var items = {};

  // 判断是否是集合的值
  this.has = function(value) {
    return value in items;
  };

  // 添加元素
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  // 移除元素
  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };
  this.clear = function() {
    items = {};
  };
  this.size = function() {
    return Object.keys(items).length;
  };
  this.values = function() {
    return Object.keys(items);
  };

  // 并集
  this.union = function(otherSet) {
    var unionSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  // 交集
  this.intersection = function(otherSet) {
    var intersectionSet = new Set();
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };
  // 差集
  this.difference = function(otherSet) {
    var differenceSet = new Set();
    values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

  // 子集；
  this.subSet = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      var value = this.values();
      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}

// var set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);
// set.add(6);
// set.add(7);
// var set1 = new Set();
// set1.add(2);
// set1.add(4);
// set1.add(5);
// console.log(set1.union(set).values()); // 并集
// console.log(set1.intersection(set).values()); // 交集
// console.log(set1.difference(set).values()); //差集
// console.log(set1.subSet(set)); // 子集

module.exports = Set;
