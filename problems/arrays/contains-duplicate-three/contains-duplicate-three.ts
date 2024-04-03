/**
 * You are given an integer array nums and two integers indexDiff and valueDiff.
 * Find a pair of indices (i, j) such that:
 *      i != j,
 *      abs(i - j) <= indexDiff.
 *      abs(nums[i] - nums[j]) <= valueDiff
 *
 * Return true if such pair exists or false otherwise.
 *
 * see: https://leetcode.com/problems/contains-duplicate-iii/
 */
export function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        for (let j = Math.max(0, nums[i] - valueDiff); j <= Math.min(nums[i] + valueDiff, Number.MAX_SAFE_INTEGER); j++) {
            if (seen.has(j) && i - seen.get(j)! <= indexDiff) {
                return true;
            }
        }

        seen.set(nums[i], i);
    }

    return false;
};
