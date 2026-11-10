class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i =0;i<strs.length;i++){
            let string = strs[i].split('').sort().join();
            if(map.has(string)){
                let arr = map.get(string)
                map.set(string,[...arr,strs[i]]);
            }else{
                map.set(string,[strs[i]]);
            }
        }
        console.log(map);
        return [...map.values()];
    }
}
