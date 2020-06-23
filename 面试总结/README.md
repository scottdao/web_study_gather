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

- 合并数组

```
 function mergeArr(arr1, arr2){
    let l1 = 0, l2 = 0, new_arr = [], len1 = arr1.length, len2 = arr2.length;
    while(l1 < len1 ||  l2<len2){
        if(l1 == len1){
            new_arr.push(arr2[l2])
            l2++
        }else if(l2 == len2){
            new_arr.push(arr1[l1])
            l1++;
        }else if(arr1[l1]<arr2[l2]){
            new_arr.push(arr1[l1]);
            l1++;
        }else{
            new_arr.push(arr2[l2]);
            l2++;
        }
    }
    return new_arr;
}
let a = mergeArr([2,5,11], [4,7,9,10]);
console.log(a);
```
- 用JS写一个函数实现:1秒之后输出1，再经过2秒后输出2，再经过4秒后输出3，再经过8秒后输出4，输出4之后结束。

```
let obj= {
	time:0,
	timers:null,
    count:0,
	one:function(){
	    console.log(1, this.count)
    },
    two:function(){
        console.log(2, this.count)
    },
    three:function(){
        console.log(3, this.count)
    },
    four:function(){
        console.log(4, this.count)
        clearInterval(this.timers)
        
    },
    changeTime:function(one,two,three,four){
        let time_obj = {
            [one]:this.one.bind(this),
            [`${one+two}`]:this.two.bind(this),
            [`${one+two+three}`]:this.three.bind(this),
            [`${one + two +three+four}`]:this.four.bind(this),
        }
        if(time_obj[this.time]){
            time_obj[this.time]();
        }
    },
    printValue:function(callBak){
        let args = Array.prototype.slice.call(arguments, 1)
        this.timers = setInterval(()=>{
            this.time++;
            this.count++;
            this.changeTime.apply(this, args.length>0?args:[1,2,4,8]);
            callBak()
        }, 1000)
    }
}
// console.log(obj)
obj.printValue(()=>{})
```

- 多个数组的交集；
- 第一种解法；
```
 function merge(){
           let args = Array.prototype.slice.call(arguments);
           let len = args.length;
           // 扁平化；
           let new_args = args.flat();
           // console.log(args, len)
            let new_obj = {}, new_arr = [];
            for(let n = 0; n<new_args.length;n++){
                if(new_obj[new_args[n]]){
                    new_obj[new_args[n]] = ++new_obj[new_args[n]];
                }
                else{
                    new_obj[new_args[n]] = 1;
                }
            }
            for(let i in new_obj){
                if(new_obj[i] >= len){
                    new_arr.push(i - 0)
                }
            }
            return new_arr;
       }

```
- 第二种解法
```
function merge(){
    let args = Array.prototype.slice.call(arguments);
    let col = 0, new_obj = {}, len = args.length, new_arr = [];
    while(col<args.length){
        let row = args[col].length - 1,cache_arr = [];
        while(row>=0){
            if(new_obj[args[col][row]]){
                new_obj[args[col][row]] = ++new_obj[args[col][row]];
            }else{
            new_obj[args[col][row]] = 1;
            }
        //  console.log(new_obj, args[col][row])
            if(new_obj[args[col][row]]>=len){
            cache_arr.push(args[col][row])
            }
            row--;
            new_arr = cache_arr;
        }
        col++
    }
    // console.log(new_obj)
    return new_arr;
}
let a = merge([1,2,3], [2,3,5,2,1,7], [3,41,2,9]);
console.log(a);
```