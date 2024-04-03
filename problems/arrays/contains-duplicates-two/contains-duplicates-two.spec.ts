import { containsNearbyDuplicate } from "./contains-duplicates-two";

describe('Arrays: Contains Duplicates II', () => {
    let nums: number[];
    let k: number | undefined;
    let expected: boolean | undefined;

    beforeEach(() => {
        nums = [];
        k = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        nums = [1,2,3,1];
        k = 3;
        expected = true;

        // Act
        const result = containsNearbyDuplicate(nums, k);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        nums = [1,0,1,1];
        k = 1;
        expected = true;

        // Act
        const result = containsNearbyDuplicate(nums, k);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        // Arrange
        nums = [1,2,3,1,2,3];
        k = 2;
        expected = false;

        // Act
        const result = containsNearbyDuplicate(nums, k);

        // Assert
        expect(result).toBe(expected);
    });
});