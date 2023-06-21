import request from "supertest";
import {describe, it, expect} from "@jest/globals";
import {app} from './app';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeNumeric(): R;
        }
    }
}

expect.extend({
    toBeNumeric(value) {
        const pass = !isNaN(parseFloat(value)) && isFinite(value);
        return {
            pass,
            message: () => pass ? `Expected ${value} not to be numeric` : `Expected ${value} to be numeric`,
        };
    },
});

describe('express rendering', () => {
    it('GET / displays hello world', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hello world');
    });

    it('GET /count displays any number', async () => {
        const response = await request(app).get('/count');
        expect(response.statusCode).toBe(200);
        // @ts-ignore
        expect(response.text).toBeNumeric();
    });

    it('GET /count?reset=yes resets number to 0', async () => {
        const response = await request(app).get('/count?reset=yes');
        expect(response.statusCode).toBe(200);
        // @ts-ignore
        expect(response.text).toBe('0');

    });

    it('GET /count after reset displays 1', async () => {
        const response = await request(app).get('/count');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('1');

        app.locals.settings.redis.quit();
    });
});