class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number,number>(); // [val,idx]
        for (const [i,n] of nums.entries()) {
            const j = map.get(target - n)
            if (j != undefined) return [j,i]
            map.set(n,i)
        }
    }
}
