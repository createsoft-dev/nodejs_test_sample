import request from "supertest";
import {describe, it, expect} from "@jest/globals";
import {app} from './app';

describe('express rendering', () => {
    it('GET / displays hello world', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hello world');
    });
});