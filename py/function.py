# 函数

def  my_boy(a, b, c=3):
 #   print(a);
    return a+b;

print(my_boy('ldy', '1'));



 # 默认参数的问题;指向对象问题。 默认参数必须指向不变对象
def  my_study(l=[]):
            l.append('name');
            return l;
# 将上面的方法改一下：
def my_study1(l=None):
    if l  is None:
        l = [];
    l.append('start');
    return l;

print(my_study1());    
print(my_study1());    
print(my_study1());    
# 廖大神的解释：Python函数在定义的时候，默认参数L的值就被计算出来了，即[]，
# 因为默认参数L也是一个变量，它指向对象[]，
# 每次调用该函数，如果改变了L的内容，则下次调用时，默认参数的内容就变了，不再是函数定义时的[]了。
# 个人理解:l是一个变量相当存在栈内存,[]属于引用类型,是存放在堆内存中,l=[],相当l是一个指针向堆内存数组地址,
# 个人理解:每调用一次内存地址没变,l指针总是指向同一个内存地址,下次调用发现上次l指针仍然指向上次创建数组,就没销毁;
#  而None和[]是两个不同的内存地址;每次调用l指针总会重新指向None,上次创建[]对象,发现没有被调用,就给销毁了.

# 关键字参数
def my_name(a, b, c=0, *args, **params):
        print('a:', a, 'b:', b, 'c:', c, 'args:',args, 'params:', params);
        # return 'a:'+a+'\rb:'+b
my_name('ldy', '3');
# print(my_name('ldy', '2'))
# 递归


