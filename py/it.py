#coding=GBK
# 迭代器：iter(it)调用 next(it)执行
# list1 = [1,2,3]
# it = iter(list1);
# print(next(it))

# 生成器
def frange(start, stop, step):
    x=start
    while x<stop:
        yield x
        x +=step

for i in frange(10,20,1):
    print(i)