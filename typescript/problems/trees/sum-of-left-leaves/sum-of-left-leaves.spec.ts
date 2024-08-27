import { buildTree } from "../buildTree";
import { sumOfLeftLeaves } from "./sum-of-left-leaves";


describe('Trees: Sum of Left Leaves', () => {
    let testCases: [(number | null)[], number][] = [
        [[3, 9, 20, null, null, 15, 7], 24],
        [[1], 0],
    ];

    testCases.forEach(([input, expected], i) => {
        test(`Example ${i + 1}`, () => {
            // Arrange
            let root = buildTree(input);

            // Act
            let result = sumOfLeftLeaves(root);

            // Assert
            expect(result).toBe(expected);
        });
    });
});
