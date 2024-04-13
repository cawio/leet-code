/**
 * Given a rows x cols binary matrix filled with 0's and 1's,
 * find the largest rectangle containing only 1's and return its area.
 *
 * see: https://leetcode.com/problems/maximal-rectangle/
 */
export function maximalRectangle(matrix: string[][]): number {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let heights = Array.from({ length: cols }, () => 0);
    let maxArea = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            heights[col] = matrix[row][col] === '1' ? heights[col] + 1 : 0;
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

function largestRectangleArea(heights: number[]): number {
    let stack: number[] = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()!];
            let width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    while (stack.length > 0) {
        let height = heights[stack.pop()!];
        let width = stack.length > 0 ? heights.length - stack[stack.length - 1] - 1 : heights.length;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}