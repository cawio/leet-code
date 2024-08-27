import { lengthOfLastWord } from "./length-of-last-word";

describe('Strings: Length of Last Word', () => {
    let s: string | undefined;
    let expected: number | undefined;

    beforeEach(() => {
        s = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        s = 'Hello World';
        expected = 5;

        // Act
        const result = lengthOfLastWord(s);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        s = '   fly me   to   the moon  ';
        expected = 4;

        // Act
        const result = lengthOfLastWord(s);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        // Arrange
        s = 'luffy is still joyboy';
        expected = 6;

        // Act
        const result = lengthOfLastWord(s);

        // Assert
        expect(result).toBe(expected);
    });
});