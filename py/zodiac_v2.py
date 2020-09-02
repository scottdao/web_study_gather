# 星座
zodiac_name = (u'白羊座', u'金牛座', u'双子座', u'巨蟹座', u'狮子座', u'处女座', u'天秤座', u'天蝎座', u'射手座', u'魔羯座', u'水瓶座', u'双鱼座')
zodiac_days = ((1, 20), (2, 19), (3, 21), (4, 21), (5, 21), (6, 21), (7, 21), (8, 21), (9, 21), (10, 21), (11, 21), (12, 21))
str_month = int(input('请输入月份:'))
str_day = int(input('请输入日期:'))
for zd_num in range(len(zodiac_days)):
    if zodiac_days[zd_num] >= (str_month, str_day):
        print(zodiac_name[zd_num])
        break
    elif str_month ==12 and str_month >23:
        print(zodiac_name[0])
        break
