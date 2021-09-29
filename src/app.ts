import express from 'express';
import { setupRoutes } from './routes';

const app = express();

app.use(express.json());

setupRoutes(app);

// Not found handler
app.use(function (req, res) {
  res.status(404).send('404 Not Found');
});

// Error handler
app.use((error, req, res, next) => {
  res.status(500).json(error instanceof Error ? { message: error.message } : error);
});

export default app;
