# 列表推导式
lit = [i*i for i in range(1, 11) if(i % 2) == 0 ]
print(lit)
# 字典推导式
zodiac_name = (u'白羊座', u'金牛座', u'双子座', u'巨蟹座', u'狮子座', u'处女座', u'天秤座', u'天蝎座', u'射手座', u'魔羯座', u'水瓶座', u'双鱼座')
dict1 = {i: 0 for i in zodiac_name}
print(dict1)
