import { longestPalindrome } from "./longest-palindromic-substring";

describe('Strings: Longest Palindromic Substring', () => {
    let s: string | undefined;
    let expected: string[] | undefined;

    beforeEach(() => {
        s = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        s = 'babad';
        expected = ['bab', 'aba']; // both are valid

        // Act
        const result = longestPalindrome(s);

        // Assert
        expect(expected).toContain(result);
    });

    test('Example 2', () => {
        // Arrange
        s = 'cbbd';
        expected = ['bb'];

        // Act
        const result = longestPalindrome(s);

        // Assert
        expect(expected).toContain(result);
    });
});
