class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
       const newArr = [...arr];
        for(let l = 0;l<newArr.length;l++){
            let r = l+1;
            let maxIdx = r;
            while(r<arr.length){
                
                if(arr[r]>arr[maxIdx]){
                    maxIdx = r;
                }
                r++;
            }
            newArr[l] = arr[maxIdx]
            
        }
        newArr[newArr.length-1] = -1;
        return newArr;
    }
}
