class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length - 1;
        let max = 0
        while (i < j) {
            const area = Math.min(heights[i],heights[j]) * (j - i)
            max = Math.max(max, area)
            // while one side is smaller than the other we should move pointers until the smaller side is taller or equal
            if (heights[i] < heights[j]) {
                i++
                while (i < j && heights[i] < heights[i - 1]) i++
            } else {
                j--
                while (i < j && heights[j] < heights[j + 1]) j--
            }
        }
        return max
    }
}
