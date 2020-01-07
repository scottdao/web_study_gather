/***
 * 堆栈实现进制转换
 */
var Stack = require("../heap.js");
// 10进制转换成其他进制
function transformTenToTwo(numberDes, baseNum) {
  var baseDigits = "0123456789ABCDEF",
    baseString = "",
    remStack = new Stack(),
    rem;

  while (numberDes > 0) {
    rem = Math.floor(numberDes % baseNum);
    // 入栈
    remStack.push(rem);

    numberDes = Math.floor(numberDes / baseNum);
  }

  while (!remStack.isEmpty()) {
    // 出栈；
    const out = remStack.pop();

    baseString += baseDigits[out];
  }
  // console.log(rem, numberDes, baseString);
  return baseString;
}

console.log(transformTenToTwo(30, 2));
