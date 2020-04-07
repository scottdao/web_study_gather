function testHeadSize() {
  var mem = process.memoryUsage();
  var format = function(by) {
    return (by / 1024 / 1024).toFixed(2) + "MB";
  };
  console.log(
    `HeapTotal:${format(mem.heapTotal)}-----usedHeap:${format(mem.heapUsed)}`
  );
}
//
//
/****
 * 加锁控制控制内存，防止数据暴增。
 * ***/
var size = 20 * 1024 * 1024;
var arr = [];
function test() {
  for (var i = 0; i < 16; i++) {
    if (arr.length > 8) {
      arr.shift();
    }
    arr.push(new Array(size));
    testHeadSize();
  }
}
test();
/****
 *
 * 局部变量在代码执行完后，不会马上被回收。等到内存不够，会执行回收，释放内存。
 * 内存回收，程序执行暂停；
 * 
function test() {
  var arr10 = new Array(size);
  var arr11 = new Array(size);
  var arr12 = new Array(size);
  var arr13 = new Array(size);
  var arr14 = new Array(size);
  var arr15 = new Array(size);
}
test();
for (var i = 0; i < 13; i++) {
  arr.push(new Array(size));
  testHeadSize();
}* */
/***
 *  全局变量
 * var arr = new Array(size);
testHeadSize();
var arr1 = new Array(size);
testHeadSize();
var arr2 = new Array(size);
testHeadSize();
var arr3 = new Array(size);
testHeadSize();
var arr4 = new Array(size);
var arr5 = new Array(size);
var arr6 = new Array(size);
var arr7 = new Array(size);
var arr8 = new Array(size);
var arr9 = new Array(size);
var arr10 = new Array(size);
var arr11 = new Array(size);
var arr12 = new Array(size);
var arr13 = new Array(size);
var arr14 = new Array(size);
var arr15 = new Array(size);
console.log(1);
 * 
*/
