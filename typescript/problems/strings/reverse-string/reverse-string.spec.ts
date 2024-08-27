import { reverseString } from "./reverse-string";

describe('Strings: Reverse String', () => {
    let input: string[] | undefined;
    let expected: string[] | undefined;

    beforeEach(() => {
        input = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        input = ['h', 'e', 'l', 'l', 'o'];
        expected = ['o', 'l', 'l', 'e', 'h'];

        // Act
        reverseString(input);

        // Assert
        expect(input).toEqual(expected);
        for (let i = 0; i < input.length; i++) {
            expect(input[i]).toBe(expected[i]);
        }
    });

    test('Example 2', () => {
        // Arrange
        input = ['H', 'a', 'n', 'n', 'a', 'h'];
        expected = ['h', 'a', 'n', 'n', 'a', 'H'];

        // Act
        reverseString(input);

        // Assert
        expect(input).toEqual(expected);
        for (let i = 0; i < input.length; i++) {
            expect(input[i]).toBe(expected[i]);
        }
    });
});
