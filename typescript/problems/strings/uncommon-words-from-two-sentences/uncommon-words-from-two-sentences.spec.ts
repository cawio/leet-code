import { uncommonFromSentences } from './uncommon-words-from-two-sentences';

type TestCase = {
    input: {
        a: string;
        b: string;
    };
    expected: string[];
};
describe('uncommon-words-from-two-sentences', function () {
    const testCases: TestCase[] = [
        { input: { a: 'this apple is sweet', b: 'this apple is sour' }, expected: ['sweet', 'sour'] },
        { input: { a: 'apple apple', b: 'banana' }, expected: ['banana'] },
    ];

    for (const test of testCases) {
        const { a, b } = test.input;
        const expected = test.expected;

        it(`should return ${expected} for uncommonFromSentences(${a}, ${b})`, function () {
            expect(uncommonFromSentences(a, b)).toEqual(expected);
        });
    }
});
