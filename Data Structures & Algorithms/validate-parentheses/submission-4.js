class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const open = new Map();
        open.set('(',')');
        open.set('{','}');
        open.set('[',']');
        for(let i =0;i<s.length;i++){
                
                if(stack.length && s[i] === open.get(stack[stack.length-1])){
                    stack.pop();
            }else{
                stack.push(s[i]);
            }
        }
        return stack.length === 0;
    }
}
