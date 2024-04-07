import { firstUniqChar } from "./first-unique-character";

describe('Strings: First Unique Character', () => {
    let s: string | undefined;
    let expected: number | undefined;

    beforeEach(() => {
        s = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        //Arrange
        s = 'leetcode';
        expected = 0;

        //Act
        const result = firstUniqChar(s);

        //Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        //Arrange
        s = 'loveleetcode';
        expected = 2;

        //Act
        const result = firstUniqChar(s);

        //Assert
        expect(result).toBe(expected);
    });

    test('Example 3', () => {
        //Arrange
        s = 'aabb';
        expected = -1;

        //Act
        const result = firstUniqChar(s);

        //Assert
        expect(result).toBe(expected);
    });
});
