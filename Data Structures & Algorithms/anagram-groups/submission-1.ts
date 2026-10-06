class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = []
        const charACode = 'a'.charCodeAt(0)
        // Map<length, [freq array, anagrams]>
        const map = new Map<string, string[]>()
        // build the freq array for each string
        // O(n)
        for (const s of strs) {
            const tempArr = Array(26).fill(0)
            // O(m)
            for (let i = 0; i < s.length; i++) {
                tempArr[s.charCodeAt(i) - charACode]++ 
            }
            const arrStr = JSON.stringify(tempArr)
            if (map.has(arrStr)) {
                map.set(arrStr, map.get(arrStr).concat(s))
            } else map.set(arrStr, [s])
        } 
        for (const v of map) {
            res.push(v[1])
        }
        return res
    }
}
