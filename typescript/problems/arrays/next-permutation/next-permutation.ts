/**
 * Given an array of integers nums, find the next permutation of nums.
 * The replacement must be in place and use only constant extra memory.
 *
 * see: https://leetcode.com/problems/next-permutation/description/
 */

export function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }

    reverse(nums, i + 1);
};

function swap(nums: number[], i: number, j: number): void {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums: number[], start: number): void {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}