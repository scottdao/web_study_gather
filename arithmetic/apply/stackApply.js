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

// console.log(transformTenToTwo(30, 2));

// 模拟parseIntMock算法
function parseIntMock(disNumber, baseDis) {
  if (baseDis) {
    const baseObject = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15
    };
    // 实现parseInt进制转换,baseDis,代表是进制数转换为十进制
    disNumber = Math.floor(disNumber - 0);
    const disNumberString = disNumber + "";
    let baseNumber = 0;
    const len = disNumberString.length;
    for (var i = len - 1; i >= 0; i--) {
      if (disNumberString[0] - 0 >= baseDis) {
        console.warn(`${baseDis}进制不存在${disNumberString[0]}`);
        return NaN;
      }
      if (disNumberString[i] - 0 > baseDis) {
        disNumberString += 0;
      } else {
        const countNum =
          baseObject[disNumberString[i] - 0] * Math.pow(baseDis, len - 1 - i);
        baseNumber += countNum;
      }
    }
    return baseNumber;
  } else {
    // parseInt 取整
    return Math.floor(disNumber - 0);
  }
}
console.log(parseIntMock(11112, 2));
