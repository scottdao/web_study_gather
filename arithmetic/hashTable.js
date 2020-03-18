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
  this.get = function(key) {
    return table[loseHashCode(key)];
  };
}
