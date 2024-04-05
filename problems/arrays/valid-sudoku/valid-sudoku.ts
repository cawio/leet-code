
/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *      Each row must contain the digits 1-9 without repetition.
 *      Each column must contain the digits 1-9 without repetition.
 *      Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 *      A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 *      Only the filled cells need to be validated according to the mentioned rules.
 *
 * see: https://leetcode.com/problems/valid-sudoku/
 */
export function isValidSudoku(board: string[][]): boolean {
    const rows = new Array(9).fill(0).map(() => new Set<number>());
    const cols = new Array(9).fill(0).map(() => new Set<number>());
    const boxes = new Array(9).fill(0).map(() => new Set<number>());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];

            if (cell === '.') {
                continue;
            }

            const cellValue = parseInt(cell);
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(cellValue) || cols[j].has(cellValue) || boxes[boxIndex].has(cellValue)) {
                return false;
            }

            rows[i].add(cellValue);
            cols[j].add(cellValue);
            boxes[boxIndex].add(cellValue);
        }
    }

    return true;
};