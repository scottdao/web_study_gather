### 基于 javascript 的常用设计模式的实现

- 设计模式是语言编程的一种技巧，提高的代码优雅性，可读性，也是为了提供代码性能。接下来为大家介绍几种常见的设计模式及几种非常相似的设计放在一起去对比。

#### 单例模式

- **定义：** 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
- **场景:** 登录按钮点击出现登录浮窗，只会被创建一次
- **代码示例：**

  ```
     var  Transparent = (function(){
         var ins = null;
         var S = function(name){
             this.name = name;
              if(ins){
                  return ins
              }
              return ins = this
         }
         S.prototype.init =function(){

         }
         return S
     })()
     console.log(new Transparent('ldy2') === new Transparent('ldy3')) // true
  ```

- **分析：** 通过上面代码执行结果，可见这种，通过 new 关键字创建的实例，也是可以是同一种实例，这也就是单例模式特别重要的一点，还有一种单例模式叫做惰性单例，也是页面加载后不创建需要执行的时候创建。此处不过多赘述。

#### 迭代器模式

- **定义：** 指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示
- **场景:** 迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，使不关心对象的内部构造，也可以按顺序访问其中的每个元素
- **种类:** 内部迭代器和外部迭代器；
  1. 内部迭代器:不需要关心内部的具体实现上面的 foreach 是属于内部迭代器
  2. 外部迭代器：必须显式地请求迭代下一个元素；将下一个迭代给暴露出来
- **代码示例：**
  ```
  var foreach = function(arr, fn){
       var index = 0;
        while(index !==arr.length){
           if(fn){
               fn(arr[index], index, arr);
               }else{
                   throw new Error(`${fn} is not function!`)
                 }
                 index++
         }
      };
  ```
- **分析：** 上面的迭代器隶属内部迭代器，而外部迭代器，就是将 index 的迭代元素给暴露出来，属于迭代器模式那就是 jquery 的实现，像`$.each`,`$.css`等，都是迭代器的最佳实践

#### 发布-订阅模式

- **定义：** 又叫观察者模式，对象间的一种一对多的依赖关系，当一个对象的状 态发生改变时，所有依赖于它的对象都将得到通知。
- **优势：** 一为时间上的解耦，二为对象之间的解耦。从架构上讲像 mvvm 及 mvc 都少不了该设计模式参与
- **劣势：** 创建订阅者本身要消耗一定的时间和内存，当订阅的消息有木有发生，他都会占据内存，也是为了弱化对象间的联系，过度使用让联系隐藏，产生 bug，处理并不轻松。
- **代码示例：**

  ```
      // 通用发布-订阅
      var event = {
          cacheListen:{},
          listen:function(key, fn){
              var cache = this.cacheListen[key];
              if(!cache){
                  this.cacheListen[key] = [];
              }
              this.cacheListen[key].push(fn);
          },
          trigger:function(){
              var key = Array.prototype.slice.call(arguments, 0,1);
              var cache = this.cacheListen[key];
              if(!cache || cache.length ===0){
                  return false
              }
              for (var index = 0; index < cache.length; index++) {
                  cache[index].apply(this, arguments)
              }
          },
          cancel:function(key, fn){
              var cache = this.cacheListen[key]
              if(!cache){// 无人订阅
                  return false;
              }
              if(!fn){ // 无回调取消所有事件
                  cache && (cache.length =0);
                  return false;
              }
              for(var i = cache.length-1; i>0; i--){
                  if(cache[i] === fn){
                      cache.splice(i,1)
                  }
              }
          }
      }

      var installEvent = function(obj){ //安装事件
          for(var i in event){
              obj[i] = event[i]
          }
      }
      var names = {}
      installEvent(names)
      names.listen('liufamliy', function(v, s){
          console.log(v, s)
      })
      names.trigger('liufamliy', 50)
  ```

#### 命令模式

- **定义：** 最简单和优雅的模式之一，是一个执行某些特定事情的指令，是回调(callback)函数的一个面向对象的替代品
- **场景：** 不知请求者是谁，也不知道发送者是谁；使得请求发送者和请求接受者能够消除彼此之前的耦合关系。可以使用高阶函数很方便的能实现
- **代码示例：**

  ```
        var closeDoorCommand = {
                execute:function(){
                    console.log('close')
                }
            }

            var openDoorCommand = {
                execute:function(){
                    console.log('open')
                }
            }

            var openQQCommand = {
                execute:function(){
                    console.log('qq')
                }
            }
        // 创建宏命令
        var MacroCommand = function(){
            return {
                commandList:[],
                add:function(command){
                    this.commandList.push(command)
                },
                execute:function(){
                    for (var index =0, commandList = this.commandList; index < commandList.length; index++) {
                      commandList[index].execute();
                    }
                },
                undo:function(obj){
                    if(!obj){// 全部撤销
                        this.commandList = []
                    }
                    for (var index = 0, commandList = this.commandList; index < commandList.length; index++) {
                        if(commandList[index] === obj){
                            this.commandList.splice(index, 1)
                        }
                    }
                }
            }
        }
         var macroCommand = MacroCommand();
        macroCommand.add(closeDoorCommand) // close
        macroCommand.add(openDoorCommand) // open
        macroCommand.add(openQQCommand)
        macroCommand.undo(openQQCommand);
        macroCommand.execute()
  ```

#### 适配器模式

- **定义：** 包装器， 解决两个软件实体间的接口不兼容的问题
- **场景：** 新老数据接口不匹配的问题，需要通过适配器去修改，不需要修改老接口；

  ```
  function cities() {
      return [{name:'1', id:1},{name:'2', id:2}]
  }
  var render = function(fn){
      console.log('渲染');
      document.write( JSON.stringify(fn()))
  }
  var adapterCities = function(oldFn){
      var oldA = oldFn();
      var a = {};
      for (let index = 0; index < oldA.length; index++) {
          a[oldA[index].name] = oldA[index].id
      }
      return function(){
          return a
      }
  }
      //  render(adapterCities(cities))
  ```

#### 享元模式

- **定义：** 用于性能优化的模式,使用大量相似的对象，对象大量的状态都可以剥离出来成外部状态，可以使用较少的共享对象去取代大量对象
- 为创建一个对象原状态，可以其他方法共享操作，避免大量对象的创建

  ```
      // 对象池的创建
        var toolPool = (function(){
            var pool = [];
            return {
                create:function(){
                    if(pool.length===0){
                        var div = document.createElement('div');
                        document.body.appendChild(div);
                        return div;
                    }else{
                       return  pool.shift()
                    }
                },
                recover:function(toolDom){
                   return pool.push(toolDom);
                }
            }
        })()
        var arr = [];
        for (var index = 0, o = ['A',"B"]; index < o.length; index++) {
             var d = toolPool.create()
            d.innerHTML = o[index]
            arr.push(d);
        }
        // console.log(arr)
        // 回收
        for (var i = 0; i < arr.length; i++) {
            toolPool.recover(arr[i]);
        }
  ```

#### 装饰者模式 和 代理模式

- 装饰者和代理模式是一对双胞胎模式，具有相似性
- **装饰者：** 对象动态地增加职责的方式
- **代理模式：** 为一个对象提供一个代用品或占位符，以便控制对它的访问
- **区别：**
  1. 代理和本体保持接口一致，强调代理与实体一种关系，通常只有一层代理  本体的引用。
  2. 装饰者模式经常会形成一条长长的装饰链
- **装饰者示例：**

  ```
      var p = {
          fire:function(){
          console.log('飞')
          }
      }
      var fire1 = p.fire;
      var autoFire = function(){
          console.log('飞得高')
      }
      p.fire = function(){
          fire1();
          autoFire();
      }
      p.fire();
  ```

- **代理模式示例：**

  ```
  // 缓存代理
   var mul = function(){
     var a = 1;
     for (let index = 0; index < arguments.length; index++) {
        a *=arguments[index];
     }
     return a;
  }

  var createProxy = function(fn){
     var cache ={};
     return function(){
         var args = Array.prototype.join.call(arguments, ',');
         if(args in cache){
             return cache[args];
         }
         return cache[args] = fn.apply(this, arguments)
     }
  }
  var min = createProxy(mul);
  var j = min(1,2,3,4)
  console.log(j) //24
  ```

#### 策略模式

- **定义：** 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
- **场景：** form 表单验证， 采用 switch case 这种也更适合策略模式
  ```
   var obj = {
            A:function(s){
                return s*3
            },
            B:function(s){
                return s*4
            },
            c:function(s){
                return s*5
            }
        }
  ```

#### 状态模式

- **定义：** 允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类
- **场景：** 区分事物内部的状态，事物内部状态的改变往往会带来事物的行为改变

  ```
    var OpenLightState = function(light){
        this.light = light;
    }
    OpenLightState.prototype.open = function(){
         console.log('开灯')
        this.light.setState(this.light.closeLight)
    }
    var CloseLight = function(light){
        this.light = light;
    }
    CloseLight.prototype.close = function(){
        console.log('关灯')
        this.light.setState(this.light.openLight)
    }
    var Lights = function(){
        this.openState = new OpenLightState(this);
        this.closeState = new CloseLight(this);
        this.curState = null;
    }
    Lights.prototype.setState = function(state){
        this.curState = state;
    }
    Lights.prototype.init = function(){
       //  this.curState = this.closeState
       this.curState = this.openState;
        this.curState.open();
    }
  ```

  - **分析：** 关键是这状态管理，其实可以采用 ifelse 语句，去实现，感觉代码会产生不友好的状态。像这种采用策略模式，就不会实现一个状态管理，状态更加实用于大型逻辑业务实现。

### 参考文档

- javascript 设计模式与开发实践
