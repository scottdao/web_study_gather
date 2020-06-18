// 算法
// 1.去除连续字符串的
//  'abcdaaaaaabcd'
function debounceStr(str){
    let new_str = '';
    for (let index = 0; index < str.length; index++) {
       if (str[index] !==str[index+1]) {
           new_str += str[index]
       }
    }
    return new_str
}
// let a = debounceStr('abcdaaaaaabcd1111112223');
// console.log(a);

// 交集

function intersection(arr1, arr2){
  let a = {}, b = {}, c = [];
    for(let i = 0; i<nums1.length;i++){
        a[nums1[i]] = true;
    }
    for(let j = 0; j<nums2.length;j++){
        if(a[nums2[j]]){
          if(b[[nums2[j]]]){
              continue;
          }
          b[nums2[j]] = true;
          c.push(nums2[j])
        }
    }
    return c;
}
// let b = intersection([1,2,3], [2,2,4])
// console.log(b);
// 123321 回文数
function hWord(x){
    if(x<0 || (x%10 ==0 && x>0)){
        return false;
    }
    let num = 0;
    while(x>num){
        num =  num*10+x%10;
        x = Math.floor(x/10);
    }
    return x == num || x == Math.floor(num/10);
}

function strToInt(str){
    let n = 0;
    let m = str.length-1;
    let i = 0;
    while (i < str.length){
        let c = str[i] - 0;
        n +=c * Math.pow(10, m)
        i++;
        m--;
    }
    return n;
}
let a = strToInt('123');
console.log(a)
