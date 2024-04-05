/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * see: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
export function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    let ans = 0;
    const map = new Map<string, number>();

    for (let j = 0, i = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j])!, i);
        }

        ans = Math.max(ans, j - i + 1);
        map.set(s[j], j + 1);
    }

    return ans;
};