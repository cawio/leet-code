import { nthSuperUglyNumber } from "./super-ugly-number";

describe('Arrays: Super Ugly Number', () => {
    let testCases: [number, number[], number][] = [
        [12, [2, 7, 13, 19], 32],
        [1, [2, 3, 5], 1],
    ];

    testCases.forEach(([n, primes, expected], index) => {
        test(`Example ${index + 1}`, () => {
            // Arrange & Act
            const result = nthSuperUglyNumber(n, primes);

            // Assert
            expect(result).toBe(expected);
        });
    });
});
