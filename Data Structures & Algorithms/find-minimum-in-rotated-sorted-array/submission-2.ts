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

        while(l <= r) {
            const m = l + Math.floor((r - l) / 2);

            if(nums[m] === nums[r]) {
                return nums[m];
            }

            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
    }
}
