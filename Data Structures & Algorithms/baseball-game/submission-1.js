class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];
        for(let i = 0;i<operations.length;i++){
            if(operations[i]==='+'){
                const item1 = record[record.length-1]
                const item2 = record[record.length-2]
                record.push(item1 + item2);
            }else if(operations[i]==='D'){
                const item1 = record[record.length-1]
                record.push(item1 *2);
            }else if(operations[i]==='C'){
                record.pop();
            }else{
                record.push(parseInt(operations[i]));
            }
        }
        return record.reduce((acc,cur)=> acc+cur,0);
    }
}
