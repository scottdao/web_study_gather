
// 斐波那契数列, 0,1,1,2,3,5,8,13,21

function feibo(n) {
    // let res = {0:0,1:1}
    if(n <2){
        return n
    }
    if(n==2){
        return 1;
    }
    let result = 0, f1 = 1, f2 = 1;
    for(let i = 2;i<n;i++){
        result = f1 + f2;
        f1 = f2;
        f2 = result;
    }
    return result; 
}
let a = feibo(8)
// console.log(a)

// 青蛙跳台 1, 2, 3, 5, 8

 