class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const arr = matrix.flat()
        let left = 0
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (arr[mid] == target) return true
            if (arr[mid] < target) left = mid + 1
            else right = mid - 1
        }
        return false;
    }
}
