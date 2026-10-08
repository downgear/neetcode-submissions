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
        // so basically if it's turn to calculate while increasing l
        // it means max l ml is already smaller than max r mr
        // which means water at that pos l cannot be taller than ml
        // reverse is applied to when increasing r too
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
