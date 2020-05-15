#### this/apply/call 的操作

### this

- 定义：javascript 中 this 总是指向一个对象，指向哪个对象，则根据函数执行环境动态绑定，不是函数声明。
- this 的指向

  1.对象方法调用

  ```
   var obj = {
          a:0,
          getA:function(){
              console.log(this === obj); // true
              console.log(this.a) // 0
          }
      }
     obj.getA()
  ```

  **分析：**`obj.getA()`这个 getA 方法属于 obj 对象，而`obj.getA()`,这 obj 属于宿主对象直接调用方法，该函数里 this 指向宿主对象,无论是在严格模式下还是非严格模式下，this 依然指向宿主对象

2. 普通函数调用
   **注：**有一点得注意，就是对象方法赋值变量问题，将这种情况拆开分析

   - 函数全局调用

   ```
   window.name = 'ldy'
   function whoIsName (){
       return this.name
   }
   console.log(whoIsName()) // ldy
   ```

   **分析：**方法`whoIsName`被默认挂载到全局对象 window 上，是可以通过`window.whoIsName`获取该方法。而调用`whoIsName()`方法时，而该函数里 this 特性总是指向一对象，所以该函数里 this 指向 window。其实在严格模式下，该函数里的 this 是 undefined,那是因为该函数被认为没有宿主对象，所以为 undefined;其实你可以将`window.whoIsName = function(){return this.name}`,这时 this 才会指向 window，我说的这是在严格模式。

- 对象赋值调用函数

  ```
   window.name = 'ldy'
   var myObj = {
        name:'12',
        getName:function(){
            return this.name
        },

    }
    var getName = myObj.getName;
    console.log(getName()); // ldy
  ```

  **分析：**将 myObj 对象的 getName 方法赋值 getName 变量，这时这个方法被间接挂在了 window 上，所以 this 就指向了 window,在严格模式下也是无法找对 this 的宿主对象，也是 undefined;

3.  构造器调用 this
