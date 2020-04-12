# 内存问题
# a = 1
# print(id(a));
# b = a;
# b = 2
# print(b);
# print(a);
# print(id(b));
# 地址赋值，地址值不变无论如何赋值，都会影响原值；
list = [1,2,3,4,5];
b = list.copy(); # 浅拷贝
b[0] = 3;
print(list)
print(b);

# 深拷贝与浅拷贝
# 浅拷贝只拷贝最外层的地址，内部地址依然没有发生改变，依然指向原来的地址；
