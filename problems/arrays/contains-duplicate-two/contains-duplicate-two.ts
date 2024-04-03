/**
 * Given an integer array nums and an integer k,
 * return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 *
 * see: https://leetcode.com/problems/contains-duplicate-ii/
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i]) && i - seen.get(nums[i])! <= k) {
            return true;
        }

        seen.set(nums[i], i);
    }

    return false;
};
