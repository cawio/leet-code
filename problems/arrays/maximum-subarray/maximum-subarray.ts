/**
 * Given an integer array nums, find the subarray
 * with the largest sum, and return its sum.
 *
 * see: https://leetcode.com/problems/maximum-subarray/
 */
export function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};