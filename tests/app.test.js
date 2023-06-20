import {app} from "../app";

import request from 'supertest-as-promised';

describe('GET /add/100/200', () => {
    it('responds with sum 100 and 200', async () => {
        const response = await request(app).get('/add/100/200');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('sum is 300');
    });
});