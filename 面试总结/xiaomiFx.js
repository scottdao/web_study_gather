//快排
function quick_sort(arr) {
    const px = (target_arr, l, r) => {
        let left = l,
            right = r,
            middle = Math.floor((l + r) / 2);
        while (left <= right) {
            while (target_arr[left] < target_arr[middle]) {
                left++;
            }
            while (target_arr[right] > target_arr[middle]) {
                right--;
            }
            if (left <= right) {
                let temp = target_arr[left]
                target_arr[left] = target_arr[right]
                target_arr[right] = temp
                left++
                right--
            }
        }
        if (target_arr.length > 1) {
            if (l < left - 1) {
                px(target_arr, l, left - 1)
            }
            if (r > left) {
                px(target_arr, left, r)
            }
        }
    }
    px(arr, 0, arr.length - 1)

}
var a = [2, 5, 1, 4, 3, 6, 21, 5];
// quick_sort(a)
// console.log(a)
// 堆排序
// 插入式建堆

function heep_sort(arr) {

}
// 原地堆化
function heapify(arr, i) {
    while (Math.floor(i / 2) > 0 && item[i] < item[Math.floor(i / 2)]) {
        swap(arr, Math.floor(i / 2), i)
        i = Math.floor(i / 2)
    }
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}