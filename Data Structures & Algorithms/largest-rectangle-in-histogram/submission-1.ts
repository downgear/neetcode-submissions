class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        // probably keep track of equal or taller 
        // store stack of tuples [index, height]
        // 
        const stack: Array<[number, number]> = [[0,heights[0]]]
        let max = heights[0]
        heights.push(0)
        for (let i = 1; i < heights.length; i++) {
            let start = i;
            while (stack.length && stack.at(-1)[1] > heights[i]) {
                const [startIdx, h] = stack.pop()
                const area = h * (i - startIdx) 
                max = Math.max(max, area)
                start = Math.min(start,startIdx)
            }
            stack.push([start, heights[i]])
        }
        return max
    }
}
