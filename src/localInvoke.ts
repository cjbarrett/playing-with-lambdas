import { getQuote } from './getQuote';
import event from '../event.json';

async function invoke() {
  const result = await getQuote(event as any, {} as any);
  console.log('Lambda response:', JSON.stringify(result, null, 2));
}

invoke();
