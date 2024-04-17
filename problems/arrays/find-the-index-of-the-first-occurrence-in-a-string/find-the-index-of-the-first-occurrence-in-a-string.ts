/**
 * Given two strings needle and haystack,
 * return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 *
 * see: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */
export function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let found = true;
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    found = false;
                    break;
                }
            }

            if (found) {
                return i;
            }
        }
    }

    return -1;
};