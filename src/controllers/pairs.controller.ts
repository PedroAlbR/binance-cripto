import { NextFunction, Request, Response } from 'express';
import { PairsService } from '../services/pairs.service';

const pairsService = new PairsService();

export class PairsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await pairsService.getAll();

      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await pairsService.create(req.body);
      res.status(202).send({ status: 'created' });
    } catch (error) {
      next(error);
    }
  }
}
