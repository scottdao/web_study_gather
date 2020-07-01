// 堆
// 大顶堆：根节点值最大，父节点大于子节点
// 小顶堆:根节点最小，子节点小于父节点;
// 自下而上式堆化 ：将节点与其父节点比较，如果节点大于父节点（大顶堆）或节点小于父节点（小顶堆），则节点与父节点调整位置
// 自上往下式堆化 ：将节点与其左右子节点比较，如果存在左右子节点大于该节点（大顶堆）或小于该节点（小顶堆），则将子节点的最大值（大顶堆）或最小值（小顶堆）与之交换
// 自下而上式堆是调整节点与父节点（往上走），自上往下式堆化是调整节点与其左右子节点（往下走）
/*
* 建堆
*/
function Heap(){
    let arr = [,]
    let swap = function (items, a, b) {
        let temp = items[a];
        items[a] = items[b];
        items[b] = temp;
    }
    this.insert = function (key) {
        arr.push(key)
        let len = arr.length-1;
        while(len/2>0 && arr[len]>arr[len/2]){
            swap(arr, len ,len/2);
            len = len/2;
        }
        
    }
}

/**
*
*/ 



