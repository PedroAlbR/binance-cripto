import express from 'express';
import { PairsController } from '../controllers/pairs.controller';

const pairsController = new PairsController();

const router = express();

// eslint-disable-next-line prettier/prettier
router.route('/')
  .get(pairsController.getAll)
  .post(pairsController.create);

export default router;
