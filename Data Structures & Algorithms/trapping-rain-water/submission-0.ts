class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        // tallest from left side at pos i
        const l = []
        // tallest from right side at pos i
        const r = []
        for (let i = 0; i < height.length; i++) {
            l.push(Math.max(l.at(-1) || 0 , height[i]))
            r.unshift(Math.max(r[0] || 0, height[height.length - i - 1]))
        }
        let res = 0
        for (let i = 0; i < height.length; i++) {
            res += Math.min(l[i],r[i]) - height[i]
            // console.log(Math.min(l[i],r[i]) - height[i])
        }
        // console.log(l,r)
        return res;
    }
}
