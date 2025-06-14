"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQuote_1 = require("../src/getQuote");
const mockEvent = {};
const mockContext = {};
describe('getQuote', () => {
    it('returns a 200 response with a quote', async () => {
        const result = (await (0, getQuote_1.getQuote)(mockEvent, mockContext));
        expect(result.statusCode).toBe(200);
        expect(result.headers).toHaveProperty('Content-Type', 'application/json');
        const body = JSON.parse(result.body);
        expect(typeof body.quote).toBe('string');
        expect(body.quote.length).toBeGreaterThan(0);
    });
    it('returns Content-Type application/json header', async () => {
        const result = await (0, getQuote_1.getQuote)(mockEvent, mockContext);
        expect(result.headers).toHaveProperty('Content-Type', 'application/json');
    });
});
