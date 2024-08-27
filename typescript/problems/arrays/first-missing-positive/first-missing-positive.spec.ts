import { firstMissingPositive } from "./first-missing-positive";

describe('Arrays: First Missing Positive', () => {
    let nums: number[];
    let expectedResult: number;

    beforeEach(() => {
        nums = [];
        expectedResult = 0;
    });

    test('example 1', () => {
        // Arrange
        nums = [1,2,0];
        expectedResult = 3;

        // Act
        const result = firstMissingPositive(nums);

        // Assert
        expect(result).toBe(expectedResult);
    });

    test('example 2', () => {
        // Arrange
        nums = [3,4,-1,1];
        expectedResult = 2;

        // Act
        const result = firstMissingPositive(nums);

        // Assert
        expect(result).toBe(expectedResult);
    });

    test('example 3', () => {
        // Arrange
        nums = [7,8,9,11,12];
        expectedResult = 1;

        // Act
        const result = firstMissingPositive(nums);

        // Assert
        expect(result).toBe(expectedResult);
    });
});