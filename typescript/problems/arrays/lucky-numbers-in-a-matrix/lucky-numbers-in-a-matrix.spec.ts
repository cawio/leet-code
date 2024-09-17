import { luckyNumbers } from './lucky-numbers-in-a-matrix';

type TestCase = [number[][], number[]];

describe('luckyNumbers', () => {
    const testCases: TestCase[] = [
        [
            [
                [3, 7, 8],
                [9, 11, 13],
                [15, 16, 17],
            ],
            [15],
        ],
        [
            [
                [1, 10, 4, 2],
                [9, 3, 8, 7],
                [15, 16, 17, 12],
            ],
            [12],
        ],
        [
            [
                [7, 8],
                [1, 2],
            ],
            [7],
        ],
    ];

    testCases.forEach(([matrix, expected], index) => {
        it(`should return ${expected} for matrix ${index}`, () => {
            expect(luckyNumbers(matrix)).toEqual(expected);
        });
    });
});
