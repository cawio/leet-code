import { deckRevealedIncreasing } from "./reveal-cards-in-increasing-order";

describe('Arrays: Reveal Cards In Increasing Order', () => {
    let deck: number[] | undefined;
    let expected: number[] | undefined;

    beforeEach(() => {
        deck = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        deck = [17,13,11,2,3,5,7];
        expected = [2,13,3,11,5,17,7];

        // Act
        const result = deckRevealedIncreasing(deck);

        // Assert
        expect(result).toEqual(expected);
    });

    test('Example 2', () => {
        // Arrange
        deck = [1, 1000];
        expected = [1, 1000];

        // Act
        const result = deckRevealedIncreasing(deck);

        // Assert
        expect(result).toEqual(expected);
    });
});
