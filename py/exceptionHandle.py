#coding=gbk

# i = 1
# try:
#     year = int(input('inpit year:'))
# except ValueError:
#     print('请重新输入:')

# try:
#     print(1/'a')
# except Exception as e:
#     print(e, '%s, %e')

# NameError
# try:
#     raise NameError('hello Error')
# except NameError:
#     print('my code error!')

# file 文件操作异常处理
try:
    a = open('files/name.txt')
except Exception as e:
    print(e)
finally:
    a.close()