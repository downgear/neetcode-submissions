class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) return 0;
        let max = 1;
        const set = new Set(nums)
        for (const n of set) {
            if (set.has(n-1)) continue;
            let l = 1;
            let x = n;
            while (set.has(x + 1)) {
                l++;
                x++;
            }
            max = Math.max(max,l)
        }
        return max
    }
}
