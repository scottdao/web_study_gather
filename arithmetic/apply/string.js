/***
 * b字符串是a字符串的子串
 *
 * **/

function sonParentString(parent, son) {
  var sonLen = son.length;
  var parentLen = parent.length;
  for (var m = 0; m < parentLen; m++) {
    var newString = "";
    for (var n = 0; n < sonLen; n++) {
      newString += parent[m + n];
      if (newString === son) {
        return [m, m + n];
      }
    }
  }
  return -1;
}
var a = sonParentString("meijsdkldysldydfemsldy", "msldy"); // 复杂度O(m*n)
// console.log(a);

// 模式匹配
/**
 * KMP算法
 * T = O(n+m)
 * **/
