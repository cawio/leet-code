import { trap } from "./trapping-rain-water";

describe('Arrays: trapping-rain-water', () => {
    test('example 1', () => {
        // Arrange
        const height = [0,1,0,2,1,0,1,3,2,1,2,1];
        const expect = 6;

        // Act
        const result = trap(height);

        // Assert
        expect(result).toBe(expect);
    });

    test('example 2', () => {
        // Arrange
        const height = [4,2,0,3,2,5];
        const expect = 9;

        // Act
        const result = trap(height);

        // Assert
        expect(result).toBe(expect);
    });
});
