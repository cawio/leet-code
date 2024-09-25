import { majorityElement } from './majority-element';

type TestParams = number[];

describe('majorityElement', () => {
    it.each<[TestParams, number]>([
        [[3, 2, 3], 3],
        [[2, 2, 1, 1, 1, 2, 2], 2],
        [[1, 2, 1, 9999, 9999, 9999, 9999], 9999],
    ])('majorityElement(%j) should return %j', (input, expected) => {
        expect(majorityElement(input)).toBe(expected);
    });
});
