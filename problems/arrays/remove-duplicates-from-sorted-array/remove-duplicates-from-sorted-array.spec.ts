import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe("Arrays: Remove Duplicates from Sorted Array", () => {
    test("Example 1", () => {
        const nums = [1, 1, 2];
        const expectedNums = [1, 2];

        const k = removeDuplicates(nums);

        expect(k).toBe(expectedNums.length);

        for (let i = 0; i < expectedNums.length; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });

    test("Example 2", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expectedNums = [0, 1, 2, 3, 4];

        const k = removeDuplicates(nums);

        expect(k).toBe(expectedNums.length);

        for (let i = 0; i < expectedNums.length; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });
});
