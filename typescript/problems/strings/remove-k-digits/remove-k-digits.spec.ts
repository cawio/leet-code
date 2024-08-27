import { removeKdigits } from "./remove-k-digits";

describe('Arrays: Remove K Digits', () => {
    const testCases = [
        { num: '1432219', k: 3, expected: '1219' },
        { num: '10200', k: 1, expected: '200' },
        { num: '10', k: 2, expected: '0' },
    ];

    testCases.forEach(({ num, k, expected }, index) => {
        test(`Example ${index + 1}`, () => {
            // Act
            const result = removeKdigits(num, k);

            // Assert
            expect(result).toEqual(expected);
        });
    });
});