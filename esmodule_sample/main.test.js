import {add, add_async} from "./func.js";

describe('math', () => {
    it('add', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('add async', () => {
        expect(add_async(1, 2)).resolves.toBe(3);
    });
});