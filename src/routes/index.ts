import { Express } from 'express';
import pairsRoute from './pairs.route';
import averageRoute from './average.route';

export function setupRoutes(app: Express) {
  app.use('/pairs', pairsRoute);
  app.use('/average', averageRoute);
}
