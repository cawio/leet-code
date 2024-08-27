import { strStr } from "./find-the-index-of-the-first-occurrence-in-a-string";

describe('Strings: Find the index of the first occurrence in a string', () => {
    let testCases: { haystack: string, needle: string, output: number }[] = [
        { haystack: 'sadbutsad', needle: 'sad', output: 0 },
        { haystack: 'leetcode', needle: 'leeto', output: -1 },
    ];

    testCases.forEach((testCase, index) => {
        test(`Example ${index + 1}`, () => {
            // Arrange
            const { haystack, needle, output } = testCase;

            // Act
            let result = strStr(haystack, needle);

            // Assert
            expect(result).toEqual(output);
        });
    });
});