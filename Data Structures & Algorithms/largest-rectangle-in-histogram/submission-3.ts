class Solution {
    largestRectangleArea(heights: number[]): number {
        const stack: number[] = [0];
        let maxArea = heights[0];
        heights.push(0);
        for (let i = 1; i < heights.length; i++) {
            while (stack.length > 0 && heights[i] < heights[stack.at(-1)]) {
                const height = heights[stack.pop()];
                // notice how the width uses (the top of the stack) instead of (the index of the current popped element)
                // because the very start of the rectangle with height = (the current popped element) starts right after (the top of the stack) 
                // so the width is (i - 1) - (stack.at(-1) + 1) + 1
                const width = stack.length === 0 ? i : i - stack.at(-1) - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        return maxArea;
    }
}