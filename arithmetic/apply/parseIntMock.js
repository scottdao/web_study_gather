// 模拟parseIntMock算法目前支持到16进制
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
    let disNumberString = disNumber + "";
    let baseNumber = 0;
    const len = disNumberString.length;
    for (let m = 0; m < len; m++) {
      if (disNumberString[m] - 0 >= baseDis) {
        disNumberString = disNumberString.slice(0, m);
      }
    }
    const disLen = disNumberString.length;
    for (let i = disLen - 1; i >= 0; i--) {
      if (disNumberString[0] - 0 >= baseDis || disNumberString[0] - 0 === 0) {
        console.warn(
          `${baseDis}进制不存在${disNumberString[0]}或者首位不存在0`
        );
        return NaN;
      }

      const countNum =
        baseObject[disNumberString[i] - 0] * Math.pow(baseDis, disLen - 1 - i);

      baseNumber += countNum;
    }
    return baseNumber;
  } else {
    // parseInt 取整
    return Math.floor(disNumber - 0);
  }
}
console.log(parseIntMock(11110, 8));
