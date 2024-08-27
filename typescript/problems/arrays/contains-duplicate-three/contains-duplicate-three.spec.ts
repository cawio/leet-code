import { containsNearbyAlmostDuplicate } from "./contains-duplicate-three";

describe('Arrays: Contains Duplicates III', () => {
    let nums: number[];
    let indexDiff: number | undefined;
    let valueDiff: number | undefined;
    let expected: boolean | undefined;

    beforeEach(() => {
        nums = [];
        indexDiff = undefined;
        valueDiff = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        nums = [1, 2, 3, 1];
        indexDiff = 3;
        valueDiff = 0;
        expected = true;

        // Act
        const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        nums = [1, 5, 9, 1, 5, 9];
        indexDiff = 1;
        valueDiff = 3;
        expected = false;

        // Act
        const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        // Arrange
        nums = [-3, 3, -6];
        indexDiff = 2;
        valueDiff = 3;
        expected = true;

        // Act
        const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 4', () => {
        // Arrange
        nums = [2, 2];
        indexDiff = 2;
        valueDiff = 0;
        expected = true;

        // Act
        const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff);

        // Assert
        expect(result).toBe(expected);
    });
});