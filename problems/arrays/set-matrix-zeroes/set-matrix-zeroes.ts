/**
 * Given an m x n integer matrix matrix, if an element is 0,
 * set its entire row and column to 0's.
 *
 * You must do it in place.
 *
 * see: https://leetcode.com/problems/set-matrix-zeroes/
 */
export function setZeroes(matrix: number[][]): void {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let firstColHasZero = false;
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
        }

        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};