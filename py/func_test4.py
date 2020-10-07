# coding = GBK
class Plyer():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_r(self):
        print("%s %s"%(self.name, self.age))


user1 = Plyer('ldy', 100)
user1.print_r()
user2 = Plyer('mye', 200)
user2.print_r()