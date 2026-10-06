class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number,number>()
        for (const n of nums) {
            map.set(n, (map.get(n) ?? 0) + 1)
        }
        const bucket = new Array<Array<number>>(nums.length + 1)
        for (const e of map) {
            if (!bucket[e[1]]) bucket[e[1]] = []
            bucket[e[1]].push(e[0])
        }
        const res = []
        while (k > 0 && bucket.length) {
            const b = bucket.at(-1);
            if (!b || !b.length) bucket.pop()
            else {res.push(b.pop()); k--;}
        }
        return res
    }
}
