const math = require('./func.cjs');
const request = require("supertest");

const app = require('./app.cjs').app;

describe('math', () => {
    it('add', () => {
        expect(math.add(1, 1)).toBe(2);
    });
});

describe('express rendering', () => {
    it('GET / displays hello world', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hello world');
    });
});