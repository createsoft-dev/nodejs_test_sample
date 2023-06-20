import {add} from "./func.js";

describe('math', () => {
    it('add', () => {
        expect(add(1, 2)).toBe(3);
    });
});