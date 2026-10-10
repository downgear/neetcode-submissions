class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0
        let r = nums.length - 1
        // if nums[l] <= nums[r] then it's not rotated
        if (nums[l] > nums[r]) {
            while (l < r) {
                const m = Math.floor((r + l) / 2);
                if (nums[m] > nums[r]) l = m + 1
                else r = m
            }
        }
        const pivot = l;
        r = nums.length - 1
        if (target == nums[l]) return l
        if (target > nums[r]) {
            l = 0
            r = pivot - 1
        }
        while (l <= r) {
            const m = Math.floor((r + l) / 2);
            if (nums[m] == target) return m
            else if (nums[m] > target) r = m - 1
            else l = m + 1
        }
        return -1
    }
}
