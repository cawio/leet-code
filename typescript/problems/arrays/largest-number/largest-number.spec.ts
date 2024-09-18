import { largestNumber } from './largest-number';

interface TestCase {
    nums: number[];
    expected: string;
}

describe('Arrays: largest-number', function () {
    const testCases: TestCase[] = [
        { nums: [10, 2], expected: '210' },
        { nums: [3, 30, 34, 5, 9], expected: '9534330' },
    ];

    testCases.forEach(({ nums, expected }) => {
        it(`should return the largest number from ${nums} as ${expected}`, function () {
            expect(largestNumber(nums)).toEqual(expected);
        });
    });
});
