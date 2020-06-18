// 快速排序
function quickSort(list, left, right) {
  var l = left; //左指针
  var r = right; //右指针
  var base = list[Math.floor((left + right) / 2)]; // 基准值

  while (l <= r) {
    while (list[r] > base) {
      // 右指针的值大于基准值，指针左移；直到指针的值小于或等于基准值，循环终止。
      r--;
    }
    while (list[l] < base) {
      // 左指针对应的值小于基准值，指针右移。直到指针的值大于或等于基准值，循环终止。
      l++;
    }
    if (l <= r) {
      // 交换的条件，左指针序号小于等于右指针的序号
      var temp = list[r];
      list[r] = list[l];
      list[l] = temp;
      // 交换后，左指针加1,右指针减1
      l++;
      r--;
    }
  }
  if (list.length > 1) {
    // 重新划分基准值，根据左指针划分递归数组
    if (left < l - 1) {
      quickSort(list, left, l - 1);
    }
    if (l < right) {
      quickSort(list, l, right);
    }
  }
}

function quick(list) {
  quickSort(list, 0, list.length - 1);
}
// var a = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
// var a = [3, 2, 6, 17, 8, 4];
var a = [3, 5, 1, 6, 4, 7, 2];
console.log(a);
quick(a);
console.log(a);
