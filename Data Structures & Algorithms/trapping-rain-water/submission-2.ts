class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0
        let ml = height[l]
        let r = height.length - 1 
        let mr = height[r]
        let res = 0 
        while (l < r) {
            if (height[l] < height[r]) {
                l++
                if (height[l] > ml) {
                    ml = height[l]
                }
                else {
                    res += ml - height[l]
                }
            }
            else {
                r--
                if (height[r] > mr) {
                    mr = height[r]
                }
                else {
                    res += mr - height[r]
                }
            }
        }
        return res
    }
}
