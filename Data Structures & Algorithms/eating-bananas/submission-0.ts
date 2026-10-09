class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1
        let right = Math.max(...piles)
        while (left < right) {
            let mid = Math.floor((right + left) / 2)
            let time = 0
            for (const p of piles) {
                time += Math.ceil(p / mid)
            }
            if (time <= h) {
                right = mid
            }
            else {
                left = mid + 1
            }
        }
        return left
        
    }
}
