class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const numLength = nums.length;
        for(let i =0;i<numLength;i++){
            nums.push(nums[i]);
        }
        return nums;
    }
    
}
