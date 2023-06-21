import {describe, it, expect} from "@jest/globals";
import {add, add_async} from "./func.js";

describe('math', (): void => {
    it('add', (): void => {
        expect(add(1, 2)).toBe(3);
    });

    it('add async', (): void => {
        expect(add_async(1, 2)).resolves.toBe(3);
    });
});