import { construct2DArray } from './convert-1d-array-to-2d-array';

type TestParameters = Parameters<typeof construct2DArray>;

describe('construct2DArray', () => {
    it.each<[TestParameters, number[][]]>([
        [
            [[1, 2, 3, 4], 2, 2],
            [
                [1, 2],
                [3, 4],
            ],
        ],
        [[[1, 2, 3], 1, 3], [[1, 2, 3]]],
        [[[1, 2], 1, 1], []],
    ])('construct2DArray(%j) should return %j', (args, expected) => {
        expect(construct2DArray(...args)).toEqual(expected);
    });
});
