class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length;
        while (j > i && numbers[i] + numbers[j] != target) {
            if (numbers[i] + numbers[j] < target) i++
            else j--
        }
        return [i+1,j+1]
    }
}
