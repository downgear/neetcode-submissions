class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dup = {};
        for (const x of nums) {
            if (dup[x]) return true;
            dup[x] = true;
        }
        return false;
    }
}
