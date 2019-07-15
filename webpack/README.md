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