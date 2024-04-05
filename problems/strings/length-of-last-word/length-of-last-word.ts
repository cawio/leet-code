/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 *
 * see: https://leetcode.com/problems/length-of-last-word/
 */
export function lengthOfLastWord(s: string): number {
    return s.trim().split('').pop()?.length ?? 0;
};
