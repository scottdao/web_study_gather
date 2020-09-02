# 文件操作
file1 = open('files/name.txt', 'w')
file1.write('ldy456456')
file1.close()

file3 = open('files/name.txt', 'a')
file3.write('刘道云dsfdsf发放大使')
file3.close()

file2 = open('files/name.txt')
f = file2.read()
print(f)
file2.close()