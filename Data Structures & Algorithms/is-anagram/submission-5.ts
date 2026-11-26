class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        const map = new Map<string,number>()
        for (const c of s) {
            map.set(c,(map.get(c) || 0) + 1)
        }
        for (const c of t) {
            map.set(c,(map.get(c) || 0) - 1)
        }
        for (const e of map) {
            if (e[1] != 0) return false
        }
        return true
    }
}
