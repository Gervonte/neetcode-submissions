class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length===0)return "/EMPTY/"
        return strs.length > 0 ? strs.join(":;"):""
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "/EMPTY/")return []
        return str.length>0 ? str.split(":;") : [str];
    }
}
