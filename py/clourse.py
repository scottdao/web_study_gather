# coding=GBK
# 闭包
def func():
    a = 1
    b = 2
    return a + b
def sum(a):
    def add(b):
        return a+b
    return add
num1 = sum(1)
num2 = num1(4)
# print(num2)

def counter():
    count = [0]
    def add_one():
        count[0] += 1
        return count[0]
    return add_one

cnt = counter()
print(cnt())
print(cnt())
print(cnt())
print(cnt())
