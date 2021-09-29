/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { createConnection } from 'typeorm';
import { PORT } from './constants';
import app from './app';

(async () => {
  await createConnection();
  app.listen(PORT, () => {
    console.log(`API Running at http://localhost:${PORT}`);
  });
})();
