import { setZeroes } from './set-matrix-zeroes';

describe('Arrays: Set Matrix Zeros', () => {
    let testCases = [
        {
            matrix: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            expected: [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1]
            ]
        },
        {
            matrix: [
                [0, 1, 2, 0],
                [3, 4, 5, 2],
                [1, 3, 1, 5]
            ],
            expected: [
                [0, 0, 0, 0],
                [0, 4, 5, 0],
                [0, 3, 1, 0]
            ]
        }
    ];

    testCases.forEach(({ matrix, expected }, index) => {
        it(`Example ${index + 1}`, () => {
            // Arrange

            // Act
            setZeroes(matrix);

            // Assert
            expect(matrix).toEqual(expected);
        });
    });
});