class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const s2 = s.split('').sort()
        const t2 = t.split('').sort()
        for (let i = 0; i < s2.length; i++) {
            if (s2[i] !== t2[i]) return false;
        }
        return true;
    }
}
