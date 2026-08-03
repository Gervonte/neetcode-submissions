class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i =0;i<nums.length;i++){
            let dif = target - nums[i];
            let idx = nums.indexOf(dif)
            if(idx !== -1 && idx!==i)return [idx,i];
        }
    }
}
