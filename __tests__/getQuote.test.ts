import { getQuote } from '../src/getQuote';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import type { APIGatewayProxyResult } from 'aws-lambda';

const mockEvent = {} as APIGatewayProxyEvent;
const mockContext = {} as Context;

describe('getQuote', () => {
  it('returns a 200 response with a quote', async () => {
    
    const result = (await getQuote(mockEvent, mockContext)) as APIGatewayProxyResult;

    expect(result.statusCode).toBe(200);
    expect(result.headers).toHaveProperty('Content-Type', 'application/json');

    const body = JSON.parse(result.body);
    expect(typeof body.quote).toBe('string');
    expect(body.quote.length).toBeGreaterThan(0);
  });

  it('returns Content-Type application/json header', async () => {
    const result = await getQuote(mockEvent, mockContext);
    expect(result.headers).toHaveProperty('Content-Type', 'application/json');
  });
 
});
