import { addStrings } from "./add-strings";

describe('Strings: Add Strings', () => {
    let inputs: [string, string] | undefined;
    let expected: string | undefined;

    beforeEach(() => {
        inputs = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        inputs = ['11', '123'];
        expected = '134';

        // Act
        const result = addStrings(inputs[0], inputs[1]);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        inputs = ['456', '77'];
        expected = '533';

        // Act
        const result = addStrings(inputs[0], inputs[1]);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        // Arrange
        inputs = ['0', '0'];
        expected = '0';

        // Act
        const result = addStrings(inputs[0], inputs[1]);

        // Assert
        expect(result).toBe(expected);
    });
});
