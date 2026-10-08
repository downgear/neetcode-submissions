class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const w = matrix.length
        const h = matrix[0].length
        let left = 0
        let right = h * w - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            const j = Math.floor(mid / h)
            const i = mid % h
            if (matrix[j][i] == target) return true
            if (matrix[j][i] < target) left = mid + 1
            else right = mid - 1
        }
        return false;
    }
}
