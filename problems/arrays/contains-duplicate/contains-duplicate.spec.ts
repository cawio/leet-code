import { containsDuplicate } from "./contains-duplicate";

describe('Arrays: Contains Duplicate', () => {
    let nums: number[];
    let expected: boolean | undefined;

    beforeEach(() => {
        nums = [];
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        nums = [1,2,3,1];
        expected = true;

        // Act
        const result = containsDuplicate(nums);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        nums = [1,2,3,4];
        expected = false;

        // Act
        const result = containsDuplicate(nums);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        // Arrange
        nums = [1,1,1,3,3,4,3,2,4,2];
        expected = true;

        // Act
        const result = containsDuplicate(nums);

        // Assert
        expect(result).toBe(expected);
    });
});