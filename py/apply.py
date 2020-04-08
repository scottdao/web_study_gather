import math

a = float(input('请输入二次项系数'))
b = float(input('请输入一次项系数'))
c = float(input('请输入常数项'))


def quad(a, b, c):
    if b*b-4*a*c >= 0:
        x1 = (-b+math.sqrt(b*b-4*a*c))/(2*a)
        x2 = (-b - math.sqrt(b*b-4*a*c))/(2*a)
        print(x1)
        print(x2)
        return(x1, x2)
    else:
        print('222')
        return


# print(quad(a, b, c))

if quad(a, b, c) == (-0.5, -1.0):
    print('测试成功')
elif quad(a, b, c) == (1.0, -4.0):
    print('测试成功')
else:
    print('测试失败')
