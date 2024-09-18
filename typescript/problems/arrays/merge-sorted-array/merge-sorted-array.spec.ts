import { merge } from './merge-sorted-array';

interface TestCase {
    nums1: number[];
    m: number;
    nums2: number[];
    n: number;
    expected: number[];
}

describe('merge-sorted-array', function () {
    const testCases: TestCase[] = [
        { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3, expected: [1, 2, 2, 3, 5, 6] },
        { nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
        { nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] },
    ];

    testCases.forEach((testCase, i) => {
        it(`Test case ${i}`, function () {
            merge(testCase.nums1, testCase.m, testCase.nums2, testCase.n);
            expect(testCase.nums1).toEqual(testCase.expected);
        });
    });
});
