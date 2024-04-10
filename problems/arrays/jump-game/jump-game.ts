/**
 * You are given an integer array nums.
 * You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 * see: https://leetcode.com/problems/jump-game/
 */
export function canJump(nums: number[]): boolean {
    let maxJump = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxJump) {
            return false;
        }
        maxJump = Math.max(maxJump, i + nums[i]);
    }

    return true;
};