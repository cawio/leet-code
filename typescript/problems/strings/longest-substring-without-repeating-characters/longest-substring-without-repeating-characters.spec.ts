import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

describe('Strings: Longest Substring Without Repeating Characters', () => {
    let s: string | undefined;
    let expected: number | undefined;

    beforeEach(() => {
        s = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        s = 'abcabcbb';
        expected = 3;

        // Act
        const result = lengthOfLongestSubstring(s);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        s = 'bbbbb';
        expected = 1;

        // Act
        const result = lengthOfLongestSubstring(s);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        // Arrange
        s = 'pwwkew';
        expected = 3;

        // Act
        const result = lengthOfLongestSubstring(s);

        // Assert
        expect(result).toBe(expected);
    });
});