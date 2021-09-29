import { NextFunction, Request, Response } from 'express';
import { PairsService } from '../services/pairs.service';
import * as SymbolService from '../services/binance.service';

const pairsService = new PairsService();

export class PairsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await pairsService.getAll();

      res.json({ results: data });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const { symbol }: { symbol: string } = req.body;
    try {
      if (!symbol) throw new Error('Invalid Symbol');

      // If the average exists, the symbol does too.
      await SymbolService.getAverage(symbol);

      await pairsService.create(symbol);
      res.status(201).send({ message: `Symbol ${symbol} created` });
    } catch (error) {
      next(error);
    }
  }

  async savePairPrice(req: Request, res: Response, next: NextFunction) {
    try {
      await pairsService.savePairPrice();
      res.status(201).json({ message: 'Price history updated' });
    } catch (error) {
      next(error);
    }
  }
}
