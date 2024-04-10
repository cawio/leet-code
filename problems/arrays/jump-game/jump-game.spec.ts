import { canJump } from "./jump-game";

describe('Arrays: Jump Game', () => {
    let input: number[] | undefined;
    let expected: boolean | undefined;

    beforeEach(() => {
        input = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        input = [2, 3, 1, 1, 4];
        expected = true;

        // Act
        const result = canJump(input);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        input = [3, 2, 1, 0, 4];
        expected = false;

        // Act
        const result = canJump(input);

        // Assert
        expect(result).toBe(expected);
    });
});
