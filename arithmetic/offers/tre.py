 def findNum(self, numbers:List[int], index1, indexEnd)-> int:
        res = numbers[index1]
        for i in range(index1,indexEnd):
            if res>numbers[i]:
               res = numbers[i]
        return res
    def minArray(self, numbers: List[int]) -> int:
        index1, indexEnd =  0, len(numbers)-1
        mid_index = index1
        while numbers[indexEnd] <= numbers[index1]:
            if indexEnd-index1 == 1:
                mid_index = indexEnd
                break

            mid_index = (index1+indexEnd)//2 
            # 如果三数相等，按顺序查找
            if numbers[index1] == numbers[indexEnd] and numbers[mid_index]==numbers[index1]:
                return self.findNum(numbers, index1, indexEnd)
            if numbers[index1] <= numbers[mid_index]:
                index1 = mid_index
            else:
                indexEnd = mid_index
        return numbers[mid_index]