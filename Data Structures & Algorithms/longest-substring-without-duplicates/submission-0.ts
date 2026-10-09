class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length == 0 || s.length == 1) return s.length
        let i = 0
        let j = 0
        let max = 0
        // O(m) space, m being unique chars in s
        const set = new Set<string>()
        // O(n)
        while (j < s.length) {
            while (set.has(s[j])) {
                set.delete(s[i])
                i++
            }
            // else
            set.add(s[j])
            max = Math.max(max, j - i + 1)
            j++
        }
        return max
    }
}
