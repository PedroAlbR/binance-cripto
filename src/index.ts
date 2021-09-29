/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import express from 'express';
import { PORT } from './constants';
import { setupRoutes } from './routes';

const app = express();

app.use(express.json());

setupRoutes(app);

// Not found handler
app.use(function (req, res) {
  res.status(404).send('404 Not Found');
});

// Error handler
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API Running at http://localhost:${PORT}`);
});

export default app;
