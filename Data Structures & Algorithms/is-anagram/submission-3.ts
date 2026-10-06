class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        const hashmap = new Map<string,number>()
        for (const c of s) {
            hashmap.set(c,(hashmap.get(c) || 0) + 1)
        }
        for (const c of t) {
            hashmap.set(c,(hashmap.get(c) || 0) - 1)
        }
        for (const e of hashmap) {
            if (e[1] !== 0) return false
        }
        return true
    }
}
