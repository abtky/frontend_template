import { sample } from '../src/assets/scripts/sample';

describe('sample', () => {
    test('success test', () => {
        expect(sample(2)).toBe(4);
    });
    test('fail test', () => {
        expect(sample(2)).not.toBe(3);
    });
});
