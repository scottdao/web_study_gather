/**
 *
 * 图：有向图与无向图
 * **/
// 建图
// var Dictionary = require('../dictionary/dictionary');
// function Map() {
//   var mapArr = [];
//   var mapList = new Dictionary();
// }
// var array = [5, 3, 5, 7, 3, 6, 9, 11, 10, 8];
var quickSort = function(array) {
  quick(array, 0, array.length - 1);
};
var quick = function(array, left, right) {
  var index;
  if (array.length > 1) {
    index = partition(array, left, right);
  }
  if (left < index - 1) {
    quick(array, left, index - 1);
  }
  if (index < right) {
    quick(array, index, right);
  }
};

var partition = function(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      return i;
    }
    swapQuickStort(array, i, j);
    i++;
    j--;
  }
  return i;
};
var swapQuickStort = function(array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};
quickSort([5, 3, 5, 7, 3, 6, 9, 11, 10, 8]);
