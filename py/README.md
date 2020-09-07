# py
### 字符串
 - 字符串内部既包含'又包含"怎么办？可以用转义字符\来
 ```
 
 ```
### 数据类型 
+ **六种数据类型：**
   -   `type`识别类型
   -    强制类型转换：int('5'), str(123), bool(123)
   -   [number类型](./num.py):数字没有大小限制；
        - 整数
            - 进制数：
            1. 二进制
                 - 0b110
            2. 8进制
                - 0o23
            3. 16进制
                - 0x23
        - 浮点数
        - 科学计算法
        - 复数:4+3j,2j;
        - 布尔值(True/False)
   -  string类型
   - 元组：tuple
   - 字典: dict
   - 集合: set
   - 列表: list
+ 序列
  - 字符串:'abcd'；获取字符串的某几个字符
  `‘adbd’[0:4]`
  1. 成员操作符(in或not in)
  2. 链接符( + )
  3. 重复操作符(*)
  4. 切片操作符([:])
  - 列表:[1,2,3,54]
  - 元组:(1,2)
  - [推导式：](./test_list.py)
    1. 列表:`lit = [i*i for i in range(1, 11) if(i % 2) == 0 ]`;
    2. 字典：`dict1 = {i:0 for i in zodiac_name}`
  - 文件内建函数和方法
    1.  open(name,encoding='GB18030') 打开文件
    2.  read() 输入
    3.  readline() 输入一行; readlines 多行
    4.  seek() 文件内移动
    5.  write() 输出
    6.  close() 关闭
  - 异常与错误处理
    1. 异常：是在出现错去时正常控制流以外的动作
    2. 异常处理的流程:检测到错误，引发异常；对异常进行捕获
    ```
      try:
       except Exception[,error]
      catch{}
    ```
    3. 
  - 函数
    def
+ [**运算符**](./operator.py)
    - 算数运算符
    -  数学运算符：在python里没有自加自增自减；
    - 逻辑运算符：and /or/not;没有异或；
    - 身份运算符：is 或者 is not
```
a = 10%3;
b = 10%-3;
```
+ [分支结构](./branch.py)：`if  elif  else`；
+ [循环](./loop.py):`for   while`
   -   break / continue / pass
+ [函数](./function.py):`def  名(形参)`
+ [内置数据结构](./build.py)
    -  地址 与值的区别
    ```
    a = '1264' // 值，使用id 方法区别；
    list = [1,2,3,5]; // 内存地址
    ```
+ [高级特性](./seniorFunc.py)
    - 切片：字符串，数组获取值；`a = [1,2,3,5]; a[1:5]; a[:1]; a[-2:]`;
    - 迭代：
    - 列表生成式：
    - 生成器：
    - 迭代器：

### 参考文档
- [python](https://www.python.org/)