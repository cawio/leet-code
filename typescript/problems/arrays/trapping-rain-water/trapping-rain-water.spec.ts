import { trap } from "./trapping-rain-water";

describe('Arrays: trapping-rain-water', () => {
    let height: number[];
    let expectedResult: number;

    beforeEach(() => {
        height = [];
        expectedResult = 0;
    });

    test('example 1', () => {
        // Arrange
        height = [0,1,0,2,1,0,1,3,2,1,2,1];
        expectedResult = 6;

        // Act
        const result = trap(height);

        // Assert
        expect(result).toBe(expectedResult);
    });

    test('example 2', () => {
        // Arrange
        height = [4,2,0,3,2,5];
        expectedResult = 9;

        // Act
        const result = trap(height);

        // Assert
        expect(result).toBe(expectedResult);
    });
});
