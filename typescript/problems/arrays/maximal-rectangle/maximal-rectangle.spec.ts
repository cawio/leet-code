import { maximalRectangle } from "./maximal-rectangle";

describe('Arrays: Maximal Rectangle', () => {
    // Arrange
    let testCases: [string[][], number][] = [
        [
            [
                ['1', '0', '1', '0', '0'],
                ['1', '0', '1', '1', '1'],
                ['1', '1', '1', '1', '1'],
                ['1', '0', '0', '1', '0']
            ],
            6
        ],
        [
            [
                ['0']
            ],
            0
        ],
        [
            [
                ['1']
            ],
            1
        ],
    ];

    testCases.forEach(([matrix, expected], index) => {
        test(`Example ${index + 1}`, () => {
            // Act
            let result = maximalRectangle(matrix);

            // Assert
            expect(result).toBe(expected);
        });
    });
});
