// import ""
// function* mySelf() {
//     yeild  '3';
//     return '22'
//     // console.log(a);
// }
// // console.log();
// let b = mySelf()

function add(){
    let args = Array.prototype.slice.apply(arguments);
    if(args.length === 1){
        return function (val) {
            return args[0]+val
        }
    }else{
        return args.reduce((previous, current) => previous+current);
    }
}

let currey = function (fn) {
    Function.prototype.add = add
    return fn.add
}
let curry2 = function (fn1) {
    return function(){
        return add.apply(fn1, arguments)
    } ;
}
function n1() {
    
}
let c = curry2(n1)
let h = c(1,2)
let g = c(1)(2);
// console.log(c, h,g);
