import express from 'express';
import { getQuote } from './getQuote';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const app = express();
const port = 3000;

app.get('/quote', async (_req, res) => {
  // Create dummy event/context for Lambda handler
  const event = {} as APIGatewayProxyEvent;
  const context = {} as Context;

  try {
    const lambdaResponse = await getQuote(event, context);
    res.status(lambdaResponse.statusCode).json(JSON.parse(lambdaResponse.body));
  } catch (err) {
    console.error('Error invoking Lambda handler:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
