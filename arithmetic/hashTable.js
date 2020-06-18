/*
 *
 *散列表：hashTable hashMap类
 *
 * 散列函数的作用是给定一个键值，然后 返回值在表中的地址。 lose lose
 */

function HashTable() {
  var table = [];
  //hash散列函数
  var loseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
      return this.key + "" + this.value;
    };
  };
  this.get = function(key) {
    // 获取表中的值
    // return table[loseHashCode(key)];
    var position = loseHashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key == key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          return table[index].value;
        }
      }
    }
    return undefined;
  };
  this.put = function(key, value) {
    //存放值
    var position = loseHashCode(key);
    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
    // console.log(position + " " + key);
    table[position] = value;
  };
  this.remove = function(key) {
    table[loseHashCode(key)] = undefined;
  };
  this.print = function() {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ":" + table[i]);
      }
    }
  };
}
var hash = new HashTable();
hash.put("l", "@@@@@");
hash.put("die", "#####");
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");
hash.put("Aaron", "aaron@email.com");
hash.put("Donnie", "donnie@email.com");
hash.put("Ana", "ana@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Mindy", "mindy@email.com");
hash.put("Paul", "paul@email.com");
hash.put("Nathan", "nathan@email.com");
hash.print("l");
// console.log();
// 散列值存在冲突：解决方案---1.分离链接法，2.线性探查法，3.双散列法
// 1.分离链接法：good:可以解决任意多次冲突；删除操作简单统一；bad:指针需要额外的空间；内存消耗特别大
// 2.线性探测法：
