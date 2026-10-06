class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = new Map<number,number>()
        nums.forEach(n =>  freq.set(n, (freq.get(n) ?? 0) + 1))
        const bucket = new Array<Array<number>>(nums.length + 1)
        freq.forEach((k,v) => {
            if (!bucket[k]) bucket[k] = []
            bucket[k].push(v)
        })
        const res = []
        while (k > 0 && bucket.length) {
            const b = bucket.at(-1);
            if (!b || !b.length) bucket.pop()
            else {res.push(b.pop()); k--;}
        }
        return res
    }
}
