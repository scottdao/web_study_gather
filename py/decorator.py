# coding=GBK
# 装饰器
import time


# print(time.time())

def timer(func):
    def wrapper():
        start_time = time.time()
        func()
        stop_time = time.time()
        print("时间%s=" % (start_time - stop_time))

    return wrapper


@timer
def my_sleep():
    time.sleep(3)


timer(my_sleep())
