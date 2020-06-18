#### promise 的源码分析及手写简单实现

- 导言：需要看明白 promise 源码，必须要了解的是 promise 是用来干什么，他做了件什么事？废话不多说，先撸一段代码。

  ```
    new Promise((resolve)=>{
        resolve(123)
        console.log(333) // 333
    }).then(value=>{
        console.log(value); // 123
    })
    console.log(444) //444

  ```

- 解释：从这段代码运行中，我看到了，运行得到的结果的先后顺序是 333,444,123;上面代码是异步执行。在哪里发生异步执行，then 方法是异步执行的。
- 同步与异步：js 有一个很特殊的性质，那就单[线程](http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)，同步异步在 js 编码显得尤为重要，同步其实就是阻塞代码执行；异步非阻塞代码执行。
- 看源码并分析：在文件`/src/core.js`中，这是`promise`主要功能的代码。
  - 看注释：注释告诉我们一个非常重要的信息，就是实现`promise`，内部设置了 0，1，2，3 四种 state，当 state 为 1 时，执行 fulfilled 回调，也是`promise`里的`resolve`回调；2 执行 rejected 回调，也会是`promise`里`reject`。
  - 找关键字段，类和方法：首先能看的是`Promise`类，在这个类传了`fn`作为参数；
    1.  promise 构造函数里关键字段或者方法调用：首先拎出来`this._state`,`this._value`, `doResolve`;
    2.  `doResolve`方法：这个方法接受了两个参数，一个把`fn`回调函数作为参数，把`promise`类作为参数，通过这个 this 传进去的，只能继承类，无法继承原型；
    3.  通过`doResolve`方法，关联其他主要的方法：`tryCallTwo`，`resolve`,`reject`；`tryCallTwo`方法传了三个参数-fn,两个回调，在两个回调里函数分别调用了`resolve`,`reject`两个函数，先分析`resolve`,resolve 函数传了 promise 和 value；这个会有个疑惑，`tryCallTwo`到底干了什么，不讲别的，贴代码吧：
    ```
        function tryCallTwo(fn, a, b) {
            try {
                fn(a, b);
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
            }
    ```
    4. 从上面的代码看，fn 回调有两个参数`resolve`和`reject`;`tryCallTwo`方法调用执行了 fn 回调并传了两个参数。
    5. `resolve`方法：resolve 方法在第二个方法里调用执行，并传了 promise 和 value 两个参数，value 值是由用户传入的值，在 resolve 函数，进行类型特殊判断；上面写的 value 类型属于字符串，所以 this.\_state = 1,this.\_value = value;后面还有 finale 函数，目前并没有处理改变 promise 的值。
    6. `then`方法:在该方法里有个 handle 方法里传了 promise 实例和 Handler 实例两个参数,这个时候 state 状态为 1，根据函数里判断，它只执行了`handleResolve`函数并传了两个 promise 实例和 handler 实例;在`handleResolve`里有个执行队列方法`asap`方法；这个队列方法里回调执行了\_state 为 1 的，又一次执行了`resolve`方法，这时候传了个 promise 对象和 then 方法里函数执行。并通过 doResolve 方法处理执行 then 方法的回调，并将 value 值传进去。

#### 简单实现 Promise 原理

- 通过上面的源码代码分析，我现在简单一步一步实现一下：
- 创建 PlayPromise 类并设置 state 和 value 值：

  ```
    function PlayPromise(fn) {

    this.state = 0; // pending
    this.value = null;
    this.callBacks = [];//存放then方法回调里的队列

    }
    PlayPromise.prototype.then = function(fulfilled) {

    };
  ```

  - 创建 resolve 方法，并改变状态；

  ```
    function PlayPromise(fn) {
        this.state = 0; // pending
        this.value = null;
        this.callBacks = [];//存放then方法回调里的队列
        var resolve = function(value) {
            this.value = value;
            this.state = 1; // fulfilled

        }
        fn(resolve.bind(this));
    }
    PlayPromise.prototype.then = function(fulfilled) {

    };
  ```

  - 处理 then 方法里回调并执行回调；
    ```
    function PlayPromise(fn) {
        this.state = 0; // pending
        this.value = null;
        this.callBacks = [];//存放then方法回调里的队列
        var resolve = function(value) {
            this.value = value;
            this.state = 1; // fulfilled
            this.callBacks.forEach(fn=>{
                fn(value)
            })
        }
        fn(resolve.bind(this));
    }
    PlayPromise.prototype.then = function(fulfilled) {
        if(this.state === 1){
            this.callBacks.push(fulfilled)
        }
    };
    ```

- 需要异步执行 then 方法里的回调，这时需要借助异步列队方法，setTimeout 也是可以执行的；
  ```
    function PlayPromise(fn) {
        this.state = 0; // pending
        this.value = null;
        this.callBacks = [];//存放then方法回调里的队列
        var resolve = function(value) {
            this.value = value;
            this.state = 1; // fulfilled
             asap(() => {
                this.callBacks.forEach(fn => {
                    // console.log(fn);
                    fn(value);
                });
            });
        }
        fn(resolve.bind(this));
    }
    PlayPromise.prototype.then = function(fulfilled) {
        if(this.state === 1){
            this.callBacks.push(fulfilled)
        }
    };
  ```
- 异步队列待续，研究中 。。。

#### 参考文档

- [图解 promise 实现原理](https://zhuanlan.zhihu.com/p/58428287)
- [promise 源码](https://github.com/then/promise/blob/91b7b4cb6ad0cacc1c70560677458fe0aac2fa67/src/core.js#L131)
