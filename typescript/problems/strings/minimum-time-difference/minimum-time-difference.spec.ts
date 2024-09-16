import { findMinDifference } from './minimum-time-difference';

describe('Strings: Minimum Time Difference', () => {
    let timePoints: string[] | undefined;
    let expected: number | undefined;

    beforeEach(() => {
        timePoints = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        timePoints = ['23:59', '00:00'];
        expected = 1;

        // Act
        const result = findMinDifference(timePoints);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        timePoints = ['00:00', '23:59', '00:00'];
        expected = 0;

        // Act
        const result = findMinDifference(timePoints);

        // Assert
        expect(result).toBe(expected);
    });
});
