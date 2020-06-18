## scott-plg
  
- **安装**
 `npm install scott-plg`
- **引入**
`import plg from 'scott-plg';`
- **文档**
  
1.  textEncryption 文本数字加密
```
 var a = 13466484073;
 plg.textEncryption(a,'*', 4);
    134****4073
```

2. platObject 对象扁平化

 ```
 var r =  {a:{b:{c:"jkfjk"}}}
 scottPlg = plg.platObject(r)
  {
    a.b.c:"jkfjk"
  }
 ```  
 
 3.millimeter 千分付
 ```
 milliter = (value(number|string), symbol(sting)){}
 var a = 123466555;
 a = plg.milliter(a)
 // 123,466,555
 ```
 
 4.debounce 防抖
 ```
  debounce = (method(Function), delay(number:默认值300))=>{}
  function inputFunc (e){
  	console.log(e.target.value, Date())
  }
  document.getElementById('inputId').addEventListener('keyup', plg.debounce(inputFunc,500))
 ```
 
  5.throttle 节流函数
  ```
  throttle = (method(Function, delay(number:默认值300)))=>{}
  function inputFunc (e){
  	console.log(e.target.value, Date())
  }
  document.getElementById('inputId').addEventListener('keyup', plg.throttle(inputFunc,500))
  ```
  
 6.cloneDeep 深拷贝
 ```
 cloneDeep = (value(object|array))=>{}
 var a = {
 	n:'123123', 
 	d:{
 		j:"wer"
 	}
 };
 const b = plg.cloneDeep(a);
 b.d.x='123132'
 console.log(b, a);
 ```
 - **webpack**
   - `webpack.NotEmitOnErrorsPlugin`