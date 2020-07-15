// 两数之和
function  addTwoNumbers(nums,target){
    let new_obj = {};
    for (let index = 0; index < nums.length; index++) {
       let x = target - nums[index];
       if(new_obj[x] !== undefined){
           return [x, nums[index]]
       }
       new_obj[nums[index]] = 1
        
    }
}
let a = addTwoNumbers([2,3,4,6,2,10], 9);
console.log(a);