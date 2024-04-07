/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 *
 * see: https://leetcode.com/probelms/first-unique-character-in-a-string/
 */
export function firstUniqChar(s: string): number {
    const frequency = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        frequency.set(currentChar, (frequency.get(currentChar) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (frequency.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}
