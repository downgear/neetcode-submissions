class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Array<Set<string>>(9);
        const cols = new Array<Set<string>>(9);
        const boxes = new Array<Set<string>>(9);

        for (let i = 0; i < 9; i++) {
            rows[i] = new Set<string>();
            cols[i] = new Set<string>();
            boxes[i] = new Set<string>();
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const num = board[i][j]
                if (num === ".") continue;
                const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[i].has(num) || cols[j].has(num) || boxes[box].has(num)) return false
                rows[i].add(num)
                cols[j].add(num)
                boxes[box].add(num)
            }
        }
        return true;
    }
}
