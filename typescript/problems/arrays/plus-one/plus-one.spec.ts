import { plusOne } from "./plus-one";

describe('Arrays: Plus One', () => {
    let digits: number[];
    let expected: number[];

    beforeEach(() => {
        digits = [];
        expected = [];
    });

    it('Example 1', () => {
        // Arrange
        digits = [1, 2, 3];
        expected = [1, 2, 4];

        //Act
        const result = plusOne(digits);

        // Assert
        expect(result).toEqual(expected);
    });

    it('Example 2', () => {
        // Arrange
        digits = [4, 3, 2, 1];
        expected = [4, 3, 2, 2];

        //Act
        const result = plusOne(digits);

        // Assert
        expect(result).toEqual(expected);
    });

    it('Example 3', () => {
        // Arrange
        digits = [0];
        expected = [1];

        //Act
        const result = plusOne(digits);

        // Assert
        expect(result).toEqual(expected);
    });
});