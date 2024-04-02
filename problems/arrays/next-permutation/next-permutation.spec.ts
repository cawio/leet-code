import { nextPermutation } from "./next-permutation";

describe('Arrays: Next Permutation', () => {
    test('should return the next permutation of the given array', () => {
        // Arrange
        let nums = [1, 2, 3];
        let expectedNextPermutation = [1, 3, 2];

        // Act
        nextPermutation(nums);

        // Assert
        for (let i = 0; i < expectedNextPermutation.length; i++) {
            expect(nums[i]).toBe(expectedNextPermutation[i]);
        }
    });

    test('should return the next permutation of the given array', () => {
        // Arrange
        let nums = [3, 2, 1];
        let expectedNextPermutation = [1, 2, 3];

        // Act
        nextPermutation(nums);

        // Assert
        for (let i = 0; i < expectedNextPermutation.length; i++) {
            expect(nums[i]).toBe(expectedNextPermutation[i]);
        }
    });

    test('should return the next permutation of the given array', () => {
        // Arrange
        let nums = [1, 1, 5];
        let expectedNextPermutation = [1, 5, 1];

        // Act
        nextPermutation(nums);

        // Assert
        for (let i = 0; i < expectedNextPermutation.length; i++) {
            expect(nums[i]).toBe(expectedNextPermutation[i]);
        }
    });
});