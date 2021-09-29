import { Router } from 'express';
import { PairsController } from '../controllers/pairs.controller';

const pairsController = new PairsController();

const router = Router();

// eslint-disable-next-line prettier/prettier
router.route('/save-price')
  .post(pairsController.savePairPrice);

// eslint-disable-next-line prettier/prettier
router.route('/')
  .get(pairsController.getAll)
  .post(pairsController.create);

export default router;
