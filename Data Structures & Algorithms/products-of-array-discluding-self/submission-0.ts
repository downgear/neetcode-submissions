class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const l = [1]
        const r = [1]
        for (let i = 0; i < nums.length - 1; i++) {
            l.push(l.at(-1) * nums[i])
            r.unshift(r[0] * nums[nums.length - 1 - i])
        }
        const res = []
        for (let i = 0; i < nums.length; i++) {
            res.push(l[i] * r[i])
        }
        return res
    }
}
