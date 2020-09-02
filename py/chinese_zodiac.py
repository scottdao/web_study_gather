# 记录生肖，根据年份计算生肖
chinese_zodiac = "鼠牛虎兔龙蛇牛羊猴鸡狗猪"
# print(chinese_zodiac[0:4])
# print(chinese_zodiac[-1])
year = 2020
print(year%12)
print(chinese_zodiac[year%12])
print('狗' in chinese_zodiac)
print(chinese_zodiac +'12321')
print(chinese_zodiac*2)
print(chinese_zodiac[0:1])