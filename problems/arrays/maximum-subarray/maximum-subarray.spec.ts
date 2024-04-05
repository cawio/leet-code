import { maxSubArray } from "./maximum-subarray";

describe("Arrays: Maximum Subarray", () => {
    let nums: number[];
    let expected: number | undefined;

    beforeEach(() => {
        nums = [];
        expected = undefined;
    });

    test("Example 1" , () => {
        // Arrange
        nums = [-2,1,-3,4,-1,2,1,-5,4];
        expected = 6;

        // Act
        const result = maxSubArray(nums);

        // Assert
        expect(result).toBe(expected);
    });

    test("Example 2" , () => {
        // Arrange
        nums = [1];
        expected = 1;

        // Act
        const result = maxSubArray(nums);

        // Assert
        expect(result).toBe(expected);
    });

    test("Example 3" , () => {
        // Arrange
        nums = [5,4,-1,7,8];
        expected = 23;

        // Act
        const result = maxSubArray(nums);

        // Assert
        expect(result).toBe(expected);
    });
});
