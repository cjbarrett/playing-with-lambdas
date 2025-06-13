import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

import quotes from '../quotes.json';
const quotesArray = quotes as string[];

export const getQuote = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
    
  const quote: string = quotesArray[Math.floor(Math.random() * quotesArray.length)];

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quote }),
  };
};
