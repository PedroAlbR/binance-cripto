import { NextFunction, Request, Response } from 'express';
import { AverageService } from '../services/average.service';

const averageService = new AverageService();

export class AverageController {
  async calculateSymbolAverage(req: Request, res: Response, next: NextFunction) {
    try {
      const { symbol, lectures } = req.query;
      if (!symbol) throw new Error("Missing 'symbol' query parameter");
      if (!lectures || typeof +lectures !== 'number') throw new Error("'lectures' query patameter must be a number");

      const { result, lectures: numberOfLectures } = await averageService.calculateSymbolAverage(
        String(symbol),
        +lectures
      );

      res.send({
        average: result,
        numberOfLectures: numberOfLectures
      });
    } catch (error) {
      next(error);
    }
  }
}
