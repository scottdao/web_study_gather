
# list_one = [1,2,3,4,5,6];
# for item in list_one:
#     print(item);

# list_two = ['list', 'ldy', 'scott'];
# for item in list_two:
#     if item == 'scott':
#         print('i am '+ item);
#     else:
#         print(item);

list_three = ['l', 'dao', 'dy']
for item in range(0, len(list_three)):
    # print(list_three[item])
    if list_three[item] == 'dy':
        print('find it')
        break
    else:
        print('not found')

