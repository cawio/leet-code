/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * see: https://leetcode.com/problems/reverse-string
 */
export function reverseString(s: string[]): void {
    for (let i = 0; i < s.length / 2; i++) {
        const temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
};