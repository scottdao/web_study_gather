# coding=GBK

def tips(fn):
    def nei(a, b):
        print('start', fn.__name__)
        fn(a, b)
        print('end')
    return nei

@tips
def add(a ,b):
    print(a+b)

@tips
def  sum(a,b):
     print(a-b)


# print(add(1,2))
add(3, 4)