// 排序算法

function swap(arr, l, r) {
  var temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}
// 1. 冒泡 n(o^2) 每个都需要比较在交换位置,相邻的两个数都得进行比较
function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
// 2. 选择排序n(o^2)：会选择比当前值小的进行交换，第二遍循环，从当前值开始，始终执行完循环，只有小就行，都会完整遍历一次，会选择最后一个小值进行交换
function selectSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var index = i;
    for (var j = i; j < arr.length; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }
    }
    if (i !== index) {
      swap(arr, i, index);
    }
  }
}

// 3. 插入排序，会向前插入；
function insertSort(arr) {
  var len = arr.length,
    j = 0,
    temp;
  for (var i = 0; i < len; i++) {
    j = i;
    temp = arr[i];
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
}

// 4.归并排序
var a = [2, 5, 1, 4, 3, 6, 21, 5];
// bubble(a);
// selectSort(a);
insertSort(a);
console.log(a);
