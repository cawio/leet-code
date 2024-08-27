import { buildTree } from "../buildTree";
import { sumNumbers } from "./sum-root-to-leaf-numbers";

describe('Trees: Sum Root to Leaf Numbers', () => {
    let testCases: [(number | null)[], number][] = [
        [[1, 2, 3], 25],
        [[4, 9, 0, 5, 1], 1026],
    ];

    testCases.forEach(([input, expected], i) => {
        test(`Example ${i + 1}`, () => {
            // Arrange
            let root = buildTree(input);

            // Act
            let result = sumNumbers(root);

            // Assert
            expect(result).toBe(expected);
        });
    });
});