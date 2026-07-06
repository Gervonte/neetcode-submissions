class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = -1;
        let cur = 0;
        for(let i = 0;i<nums.length;i++){
            console.log(i)
            if (nums[i] === 1){
                cur += 1;
            }else{
                max = Math.max(cur,max);
                cur = 0;
            }
        }
        max = Math.max(cur,max);
                cur = 0;
        return max;
    }
}
