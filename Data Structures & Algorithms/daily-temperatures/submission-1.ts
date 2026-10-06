class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: Array<number> = []
        const res = new Array(temperatures.length).fill(0)
        for (const [i,t] of temperatures.entries()) {
            while (stack.length && temperatures[stack.at(-1)] < t) {
                const idx = stack.pop()
                res[idx] = i - idx;
            }
            stack.push(i)
        }
        return res
    }
}
