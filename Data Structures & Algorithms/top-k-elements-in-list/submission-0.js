class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        nums.sort((a,b)=>a-b);
        const map = new Map();
        for(let i =0;i<nums.length;i++){
            let val = map.get(nums[i]) ?? 0;
            map.set(nums[i],val+1);
        }
        let arr = []
        for(let [key,value] of map){
            arr.push([key,value]);
        }
        arr.sort((a,b)=>{
            return b[1] - a[1];
        })
        const ans = []
        for(let i = 0;i<k;i++){
            ans.push(arr[i][0]);
        }


        return ans;
    }
}
