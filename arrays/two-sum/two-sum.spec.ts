import { twoSum } from "./two-sum";

describe('Arrays: Two Sum', () => {
    it('should return the indices of two numbers that add up to the target', () => {
        const nums = [2, 7, 11, 15]
        const target = 9
        expect(twoSum(nums, target)).toEqual([0, 1])
    })

    it('should return the indices of two numbers that add up to the target', () => {
        const nums = [3, 2, 4]
        const target = 6
        expect(twoSum(nums, target)).toEqual([1, 2])
    })

    it('should return the indices of two numbers that add up to the target', () => {
        const nums = [3, 3]
        const target = 6
        expect(twoSum(nums, target)).toEqual([0, 1])
    })
    }
);