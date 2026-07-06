class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        let l = 0;
        for(let r =0;r<nums.length;r++){
            if(nums[r] !== val){
                k +=1;
                [nums[l],nums[r]] = [nums[r],nums[l]];
                l+=1;
                
            }
        }
        return k;
    }
}
