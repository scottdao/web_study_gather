# coding=GBK
# 多线程编程与单线程
# thread 多线程
#
# def myThread(arg1, arg2):
#     print('%s %s', arg1)
#
#  for i in range(0,1):
#      t1 = myThread(i, i+1)
import threading
# import time
# import os
from threading import current_thread

# print(os.getpid())
class Mythread(threading.Thread):
    def run(self):
        print(current_thread().getName(), 'start')
        print('run')
        print(current_thread().getName(), 'stop')

t1 = Mythread()
t1.start()
t1.join()
print(current_thread().getName(), 'end')