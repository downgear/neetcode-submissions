class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const m = new Map<string,string[]>()
        for (const str of strs) {
            const map = new Map<string,number>()
            for (const c of str) {
                map.set(c,(map.get(c) || 0) + 1)
            }
            const strMap = JSON.stringify([...map].sort())
            const resArr = m.get(strMap)
            if (m.get(strMap)) resArr.push(str) 
            else m.set(strMap,[str])  
        }
        const res = []
        for (const v of m) res.push(v[1])
        return res
    }
}
