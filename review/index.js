// 面试题1
// function Fn(){
//     this.s1 = 0;
//     this.s2 = 0
//     setInterval(()=>this.s1++, 1000)
//     setInterval(function(){
//         this.s2++
//     }, 1000)
// }
// const fn = new Fn()
// setTimeout(()=>console.log(fn.s1), 3100) // 3
// setTimeout(()=>console.log(fn.s2), 3100) // 0

// 面试题2

// abc()
// var a = 123
// function zyy(){
//     console.log(a)
// }
// function abc(){
//     var a = 456
//     zyy()
// }
// console.log(a)

// 面试题3
// setTimeout(()=>{
//     console.log(123)
//     new Promise((resolve)=>{
//         console.log(1)
//         resolve()
//         console.log(2)
//     }).then(()=>{
//         console.log(3)
//     })
// })
// setTimeout(()=>{
//     console.log(4)
// }, 50)

// 面试题4
// 3 --- 11
// 4 --- 100
function add (a,b){
    const _a = (a>>>0).toString(2)
    const _b  = (b>>>0).toString(2)
    // console.log(_a, _b)
    return parseInt( _a>>>_b, 2).toString(10)
}
// add(3, 4)
console.log(add(3,4))