#### 剑指offer
- [两个队列实现一栈](./one.js)
```

class Stack{
    constructor() {
       this.queue1 = [];
       this.queue2 = [];
    }
    en_stack(val){// 进栈
        this.queue1.push(val) // 进队列
    }
    out_statck(){// 出栈
        let head = -1;
        if(this.queue2.length<=0){
            while (this.queue1.length>=1) {
                let s1 = this.queue1.shift() //出队列
                this.queue2.push(s1) //进队列；    
            }
            head = this.queue1.shift();
        }
        
        while (this.queue2.length>1) {
            let s2 = this.queue2.shift();
            this.queue1.push(s2);
        }
       
       if(this.queue2.length){
            head = this.queue2.shift();
        }
        
       
        return head;
    }
    
}
let stack = new Stack();
stack.en_stack(1)
stack.en_stack(2)
stack.en_stack(3)
let v1 = stack.out_statck();
console.log(v1);
let v2 = stack.out_statck();
console.log(v2);
let v3 = stack.out_statck();
console.log(v3);
```