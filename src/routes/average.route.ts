import express from 'express';
import { AverageController } from '../controllers/average.controller';

const averageController = new AverageController();
const router = express();

// eslint-disable-next-line prettier/prettier
router.route('/')
  .get(averageController.calculateSymbolAverage);

export default router;
