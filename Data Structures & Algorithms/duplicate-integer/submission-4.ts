class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dup = new Set<number>();
        for (const x of nums) {
            if (dup.has(x)) return true;
            dup.add(x);
        }
        return false;
    }
}
