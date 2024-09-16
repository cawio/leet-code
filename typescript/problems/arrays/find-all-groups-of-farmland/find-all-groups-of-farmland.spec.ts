import { findFarmland } from './find-all-groups-of-farmland';

describe('findFarmland', () => {
    let land: number[][] | undefined;
    let expected: number[][] | undefined;

    beforeEach(() => {
        land = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        land = [
            [1, 0, 0],
            [0, 1, 1],
            [0, 1, 1],
        ];
        expected = [
            [0, 0, 0, 0],
            [1, 1, 2, 2],
        ];

        // Act
        const result = findFarmland(land);

        // Assert
        expect(result).toEqual(expected);
    });

    test('Example 2', () => {
        // Arrange
        land = [
            [1, 1],
            [1, 1],
        ];
        expected = [[0, 0, 1, 1]];

        // Act
        const result = findFarmland(land);

        // Assert
        expect(result).toEqual(expected);
    });

    test('Example 3', () => {
        // Arrange
        land = [[0]];
        expected = [];

        // Act
        const result = findFarmland(land);

        // Assert
        expect(result).toEqual(expected);
    });
});
