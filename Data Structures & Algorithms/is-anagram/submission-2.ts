class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const hashmap = new Map<string, number>()
        for (let i = 0; i < s.length; i++) {
            hashmap.set(s[i],(hashmap.get(s[i]) | 0) + 1)
            hashmap.set(t[i],(hashmap.get(t[i]) | 0) - 1)
        }
        for (const x of hashmap) {
            if (x[1] !== 0) return false;
        }
        return true;
    }
}
