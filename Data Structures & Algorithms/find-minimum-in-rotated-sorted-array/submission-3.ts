class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0, r = nums.length - 1;

        if(nums[l] <= nums[r]) {
            return nums[l];
        }

        // goal is moving l and r on the exact same index (on the correct side)
        while(l <= r) {
            const m = l + Math.floor((r - l) / 2);

            // l == r anyway
            if(nums[m] === nums[r]) {
                return nums[m];
            }

            // if m > r which means l and r are on dif side
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                // else potentially on the same side
                r = m;
            }
        }
    }
}
