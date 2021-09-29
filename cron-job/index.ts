import cron from 'node-cron';
import fetch from 'node-fetch';

console.log('>> Initializing cron job: 0 */1 * * *');

cron.schedule('0 */1 * * *', async () => {
  try {
    const response = await fetch('http://localhost:3000/pairs/save-price', { method: 'POST' });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Error', error);
  }
});
