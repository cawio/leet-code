import { searchInsert } from "./search-insert-position";

describe('Arrays - Search Insert Position', () => {
    let nums: number[];
    let target: number | undefined;
    let expected: number | undefined;

    beforeEach(() => {
        nums = [];
        target = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        nums = [1, 3, 5, 6];
        target = 5;
        expected = 2;

        // Act
        const result = searchInsert(nums, target);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        nums = [1, 3, 5, 6];
        target = 2;
        expected = 1;

        // Act
        const result = searchInsert(nums, target);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        // Arrange
        nums = [1, 3, 5, 6];
        target = 7;
        expected = 4;

        // Act
        const result = searchInsert(nums, target);

        // Assert
        expect(result).toBe(expected);
    });
});
