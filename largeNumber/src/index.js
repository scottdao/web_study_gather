export default function add(nums1, nums2) {
    const len1 = nums1.length-1;
    const len2 = nums2.length-1;
    let carry = 0;
    let ret = '';
    while (len1>=0 || len2>=0) {
        let x = 0;
        let y = 0;
        let sum = 0;
        if(len1>=0){
            x = nums[len1] - '0';
            len1--;
        }
        if(len2>=0){
            y=nums2[len2] - '0';
            len2--;
        }
        sum = x+y+carry;
        if(sum>=10){
            sum -= 10;
            carry = 1;
        }else{
            carry = 0;
        }
        ret = sum + ret;
    }
    return ret;
}
