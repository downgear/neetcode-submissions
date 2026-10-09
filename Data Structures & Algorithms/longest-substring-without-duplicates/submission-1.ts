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
        // Map of the most recent index for a character
        const map = new Map()
        // O(n)
        while (j < s.length) {
            if (map.has(s[j])) {
                i = Math.max(map.get(s[j]) + 1, i)
            }
            // else
            map.set(s[j], j)
            max = Math.max(max, j - i + 1)
            j++
        }
        return max
    }
}
