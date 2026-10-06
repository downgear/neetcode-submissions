class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest = prices[0];
        let maxProfit = 0;

        let left = 0;
        for (let right = 1; right < prices.length; right++) {
            const dayProfit = prices[right] - lowest;
            if (prices[right] < lowest) {
                lowest = prices[right];
            } else if (dayProfit > maxProfit) {
                maxProfit = dayProfit;
            }
        }

        return maxProfit;
    }
}
