const math = require('./func.cjs');

describe('math', () => {
    it('add', () => {
        expect(math.add(1, 1)).toBe(2);
    });
});