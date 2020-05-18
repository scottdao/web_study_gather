#### jsvascript 中的 this/apply/call

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

  **分析：** `obj.getA()`这个 getA 方法属于 obj 对象，而`obj.getA()`,这 obj 属于宿主对象直接调用方法，该函数里 this 指向宿主对象,无论是在严格模式下还是非严格模式下，this 依然指向宿主对象

2.  普通函数调用
    **注：** 有一点得注意，就是对象方法赋值变量问题，将这种情况拆开分析

    - 函数全局调用

    ```
    window.name = 'ldy'
    function whoIsName (){
        return this.name
    }
    console.log(whoIsName()) // ldy
    ```

    **分析：** 方法`whoIsName`被默认挂载到全局对象 window 上，是可以通过`window.whoIsName`获取该方法。而调用`whoIsName()`方法时，而该函数里 this 特性总是指向一对象，所以该函数里 this 指向 window。其实在严格模式下，该函数里的 this 是 undefined,那是因为该函数被认为没有宿主对象，所以为 undefined;其实你可以将`window.whoIsName = function(){return this.name}`,这时 this 才会指向 window，我说的这是在严格模式。

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

      **分析：** 将 myObj 对象的 getName 方法赋值 getName 变量，这时这个方法被间接挂在了 window 上，所以 this 就指向了 window,在严格模式下也是无法找对 this 的宿主对象，也是 undefined;

3.  构造器调用 this

    ```
    var Myself = function(){

            this.name = 's';
            // return 'l'
            return {
                l:'l'
            }
        }
    var obj = new Myself();
    console.log(obj, obj.name)
    ```

    **分析:** 进行对象覆盖问题，return 的对象字面量对类实例的覆盖；而字符串是无法进行覆盖，由于值内存和地址内存导致的主要原因。地址内存：返回的引用类型，存放于地址内存，返回的基本类型存放于值内存（栈内存）。

4.  Function.prototype.call 或 Function.prototype.apply 调用

    - 可以动态改变函数内部的 this 指向

    ```
        var myObj = {
            name:'ldy',
            getName:function(){
                return this.name
            }
        }

        var on = {
            name:"sly"
        }

        console.log(myObj.getName());// ldy
        console.log(myObj.getName.call(on))// sly
    ```

    **分析：** 将函数的方法的宿主对象改变，将挂载在 myObj 的 getName 函数挂载到了 on 对象上；导致我们看到 this 指向的改变。

### call 和 apply

- 区别：作用一致，参数形式不同；

  ```
  var func = function( a, b, c ){
    console.log ( [ a, b, c ] ); // 输出 [ 1, 2, 3 ]
   };
   // func.apply( null, [ 1, 2, 3 ] );
   func.call(null, 1,2,3)
  ```

  **分析：** 上面的代码只是用于传参，用于 this 指向的改变，可以参考 this 指向的第四点，此地，不再赘述。

- bind 函数实现：其实在大部分浏览器都基本内置了 bind 方法，来改变 this 的指向，但是是如何实现 bind 方法的，请参考下面的代码：

  ```
    Function.prototype.bind = function(context){
            var that = this;
            var context = [].shift.call(arguments);// 借用[].shift方法，给挂载到了arguments类数组上并执行shift方法
            var args = [].slice.call(arguments);
            return function(){
                // args 传进去是可行；[].concat.call( args, [].slice.call( arguments ) ),这个传进去也是可行的;
                // 具体会有差别，目前还没有认证其差别
                 that.apply((!this|| this===window)?context:that,   [].concat.call( args, [].slice.call( arguments ) ))
            }
    }
  ```

  **分析：** bind 函数实现，也是借用了 apply 方法的实现，利用 call 实现，可以借助 es6 语法去实现，理解其原理即可，`that.call(context, ...args)`,其他实现方法，还未有找到资料去证明其实现方案。

- 通过 call 或者 apply 绑定实现继承

  ```
          var A = function(){
              this.ca = function(){}
              this.l = 'l'
          }
          A.app = function(){}
          var B = function(){
              A.call(this, arguments)
          }
          var b = new B();
          console.log(b)
  ```

  1. 其实通过 call 或 apply 实现继承，有个问题，无法继承原型方法
  2. 接下来实现原型继承：

  ```
     var A = function(){
            this.ca = function(){}
            this.l = 'l'
            this.a=['q']
        }
        A.prototype.app = function(){}
        A.a = function(){}
        var a = new A();
        var B = function(){

        }
        B.prototype = a;
        var b = new B();
        var b1 = new B()
        b1.a.push(23)

        console.log(b, b1)
  ```

  **分析：** 子类继承父类所有原型和类方法，但是不同实例中改变父类的属性，会影响其他子类实例的获取父类属性的值。

  3. 组合模式继承

  ```
  var A = function(){
          this.ca = function(){}
          this.l = 'l'
          this.a=['q']
      }
      A.prototype.app = function(){}
      A.a = function(){}
      var a = new A();
      var B = function(){
         A.call(this, arguments)
      }
      B.prototype = a;
      var b = new B();
      var b1 = new B()
      b1.a.push(23)

      console.log(b, b1)
  ```

  **分析：** 组合继承，不同实例间获取父类的值，改变父类的值，互不干扰。

  **总结：** 本篇先简单的介绍这三种，其实还有原型式，寄生式等，下篇将会介绍 js 面向对象多态与继承等问题。

- 闭包中 this 指向：指向全局对象,当然也是可以通过 call 或者 apply 去修改
  ```
  var name = 'oi'
        var c = {
            name:'l',
            a:function(){
                return function(){
                    return this.name
                }
            }
        }
        console.log(c.a()()) // oi
  ```
  **分析：** 调用 c.a()时，返回一个 function 函数，这个函数默认挂载到全局，作用域为全局，其实可以做个实验，将 c.a()给挂到另一个对象中，那么 this 的指向，就指向被挂载到的那个对象。
- 硬绑定：修改一次，无法再次修改 this 的指向，

  ```
  var f = function(){
              console.log(this.n)
          }

          var o = {
              n:"876"
          }

          var ba = function(){
              f.call(o)
          }
          ba()
          ba.call(window)
  ```

- 软绑定：为了保持和硬绑定同样的效果，并且保留隐式绑定或者显示绑定修改 this 的能力

  ```
    Function.prototype.softBind = function(){
            var that = this;
            var context = [].shift.call(arguments);
            var args = [].slice.call(arguments);
            var bound =  function(){
                return that.apply((!this|| this===window)?context:this,   [].concat.call( args, [].slice.call( arguments ) ))
            }
            // bound.prototype = Object.create(that.prototype) // 继承function原型特性
            return bound
        }

  ```

  实例：

  ```
     var foo = function(){
            // console.log(this)
            console.log(this.sco)
    }
    var liu1 = {
        sco:'sco1'
    }
    var liu2 = {
        sco:"sco2"
    }
    var liu3 = {
        sco:'sco3'
    }
    var fool = foo.softBind(liu1);
    fool(); // sco1
    liu2.foo = foo.softBind(liu1);// 隐式绑定
    liu2.foo(); // sco2

    fool.call(liu3); // sco3 显示绑定
  ```

- 箭头函数 this 指向问题：箭头函数并不是使用 function 关键字定义使用操作符来定义的=>,他的指向根据最外层作用域来决定的 this。

- 实例 1：

  ```

      var o2 = {
          l:'09',
      }
      var o1 = {
          l:1
      }
      var j = function(){
          return ()=>{
              console.log(this.l)
          }
      }
      var b1 = j.call(o1)
      b1.call(o2) // 1

  ```

- 实例 2：

  ```
     var o1 = {
          l:1
      }
      var fn = function(){
          setTimeout(() => {
              console.log(this.l)
          }, 100);
      }
      fn.call(o1)
  ```

  **小结：** 上面两则实例是对箭头函数的 this 取决于最外层函数的作用域。

**总结：** 对于上面介绍的 this 的指向绑定，在这里分为几类：隐式绑定;显示绑定；new 绑定三类；在显示绑定存在软绑定和硬绑定；那什么是隐式绑定呢，其实隐式绑定其实就是直接写进对象里的函数或者通过 function 定义的全局的函数；显示绑定，就是通过 call 或者 apply 改变函数的作用域；new 绑定通过 new 一个实例来改变函数或者类的作用域。软绑定呢，就是实例中对 softBind 函数的实现方案，就是软绑定。默认绑定到全局对象的函数，在严格模式下 this 是 undefined。

### 参考文档

- javascript 设计模式与开发实践
- 你不知道的 javascript(上卷)
