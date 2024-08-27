import { removeElement } from "./remove-element";

describe('Arrays: Remove Element', () => {
    test('should return the new length of the array after removing all instances of a given value', () => {
        // Arrange
        let nums = [3, 2, 2, 3];
        let val = 3;
        let expectedNums = [2, 2];

        // Act
        let result = removeElement(nums, val);

        // Assert
        expect(result).toBe(expectedNums.length);
        for (let i = 0; i < expectedNums.length; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });

    test('should return the new length of the array after removing all instances of a given value', () => {
        // Arrange
        let nums = [0, 1, 2, 2, 3, 0, 4, 2];
        let val = 2;
        let expectedNums = [0, 1, 3, 0, 4];

        // Act
        let result = removeElement(nums, val);

        // Assert
        expect(result).toBe(expectedNums.length);
        for (let i = 0; i < expectedNums.length; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });
});