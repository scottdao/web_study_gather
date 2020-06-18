#### 笔试题
-  实现交通灯的逻辑,红灯5s，绿灯10s,黄灯3s...不停的循环执行

```
 let lights = {
            time:0,
            redLights:function(){
                console.log('红灯')
            },
            greenLights:function(){
                console.log('绿灯')
            },
            orangeLights:function(){
                console.log('黄灯')
            },
            changeLights:function(redTime, greenTime,orangeTime){
                if(this.time<=redTime){
                    this.redLights();
                }else if(this.time <= redTime+greenTime){
                    this.greenLights();
                }else if(this.time <= redTime+greenTime+orangeTime){
                    this.orangeLights();
                }else{
                    this.time = 0;
                }
            },
            circle:function(callback){
                let args = Array.prototype.slice.call(arguments, 1)
                setInterval(()=>{
                    this.time++;
                    this.changeLights.apply(this, args.length>0?args: [5,10,3]);
                    callback(this.time);
                },1000)
            }
        }    
        lights.circle(()=>{});
```

- 快速排序
- 分治策略，时间复杂度为nlog2(n),平均性能好;不稳定，初始序列有序或基本有序时，时间复杂度降为O(n^2)
```
function quickSort(arr, l, r){
            let start = l,end = r;
            let mid_value = arr[Math.floor((start+end)/2)];
            while(start<=end){
                while(arr[start]<mid_value){
                    start++;
                }
                while(arr[end]>mid_value){
                    end--
                } 
                if(start<=end){
                    let temp = arr[start];
                    arr[start] = arr[end];
                    arr[end] = temp;
                    start++;
                    end--;
                }
            }
            if(arr.length>1){
                if(l<start-1){
                    quickSort(arr, l, start-1)
                }
                if(start<r){
                    quickSort(arr, start, r)
                }
            }
        }
        function q_sort(arr){
            quickSort(arr, 0, arr.length-1)
        }
        let a = [3,5,7,2,1,8,9,0,6,23,54,75,1,5,8]
        q_sort(a)
        console.log(a);
```