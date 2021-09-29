import { getRepository } from 'typeorm';
import { PairPriceHistory } from '../models/pairs.model';

export class AverageService {
  async calculateSymbolAverage(symbol: string, lectures: number) {
    if (lectures < 1) throw new Error('Lectures should be greated than 0');

    const priceHistoryRepository = getRepository(PairPriceHistory);

    const symbolHistory = await priceHistoryRepository.find({
      where: {
        symbol: symbol
      },
      take: lectures,
      order: {
        id: 'DESC'
      }
    });

    if (!symbolHistory || !symbolHistory.length) throw new Error("Symbol doesn't exist in the database");

    const symbolHistoryTotal = symbolHistory.reduce((total, history) => {
      return total + history.price;
    }, 0);

    return {
      result: symbolHistoryTotal / symbolHistory.length,
      lectures: symbolHistory.length
    };
  }
}
