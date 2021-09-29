import { Express } from 'express';
import pairsRoute from './pairs.route';

export function setupRoutes(app: Express) {
  app.use('/pairs', pairsRoute);
}
