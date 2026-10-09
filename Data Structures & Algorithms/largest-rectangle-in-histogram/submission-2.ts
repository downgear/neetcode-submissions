class Solution {
    largestRectangleArea(heights: number[]): number {
        const stack: number[] = [0];
        let maxArea = heights[0];
        heights.push(0);
        for (let i = 1; i < heights.length; i++) {
            while (stack.length > 0 && heights[i] < heights[stack.at(-1)]) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack.at(-1) - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        return maxArea;
    }
}