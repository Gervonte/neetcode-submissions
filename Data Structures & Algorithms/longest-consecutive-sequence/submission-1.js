class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // convert to a set for o(1) lookups 
        // a number is the start if the number -1 is not present.
        // example:
        // 2 ->3,4,5
        // 20 ->
        // 4 ->
        // 10 ->
        const set = new Set(nums);
        let max = 0;
        for(let i = 0;i<nums.length;i++){
            if(!set.has(nums[i]-1)){
                let len = 1;
                while(set.has(nums[i]+len)){
                    len++;
                }
                 max = Math.max(len,max);
            }
           
        }
        return max;
    }
    
}
