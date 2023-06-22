import {describe, it, expect} from "@jest/globals";
import {add, add_async, div_async} from "../math";

describe('math', (): void => {
    it('add', (): void => {
        expect(add(1, 2)).toBe(3);
    });

    it('add async', (): void => {
        expect(add_async(1, 2)).resolves.toBe(3);
    });

    it('div async', async (): Promise<void> => {
        await expect(div_async(1, 2)).resolves.toBe(0.5);
    });

    it('async 0 division is rejected', async (): Promise<void> => {
        await expect(div_async(1, 0)).rejects.toThrow(
            'zero division',
        );
    });
});