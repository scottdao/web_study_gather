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
function merge(left, right) {
  var arr = [],
    ir = 0,
    il = 0;
  while (il < left.length && ir < right) {
    if (left[il] < right[ir]) {
      arr.push(left[il]);
      il++;
    } else {
      arr.push(right[ir]);
      ir++;
    }
  }
  while (il < left.length) {
    arr.push(left[il++]);
  }
  while (ir < right.length) {
    arr.push(right[ir++]);
  }
  // console.log(left, right, arr);
  return arr;
}
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  mergeSort(left);
  mergeSort(right);
  return merge(left, right, arr);
}

// 快速排序
function q_sort(items, left, right){
  let l = left,r = right, mid_value = Math.floor((left+right)/2);
  while(l<=r){
    while(items[l]<items[mid_value]){
      l++;
    }
    while (items[r]>items[mid_value]) {
      r++;
    }
    if(l<=r){
      let temp = items[l];
      items[l] = items[r];
      items[r] = temp;
    }
  }
  if(items.length>1){
    if(left<l-1){
      q_sort(items, left, l-1);
    }
    if(l<right){
      q_sort(items, l, right);
    }
  }

}
function quickSort(arr){
  q_sort(arr, 0, arr.length-1);
}

var a = [2, 5, 1, 4, 3, 6, 21, 5];
// bubble(a);
// selectSort(a);
// mergeSort(a);
// console.log(a);
