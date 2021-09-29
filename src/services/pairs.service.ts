import { getConnection, getRepository } from 'typeorm';
import { PairPriceHistory, Pairs } from '../models/pairs.model';
import * as BinanceService from './binance.service';

export class PairsService {
  getAll() {
    return getRepository(Pairs).find();
  }

  async create(symbol: string) {
    const pairsRepository = getRepository(Pairs);

    const existingPair = await pairsRepository.findOne({
      where: { symbol: symbol }
    });

    if (existingPair) throw new Error('Symbol already exists');

    const newPair = pairsRepository.create({ symbol });

    await pairsRepository.save(newPair);
  }

  async savePairPrice() {
    const pairsRepository = getRepository(Pairs);
    const queryRunner = getConnection().createQueryRunner();
    await queryRunner.startTransaction();

    const pairs = await pairsRepository.find();

    try {
      await Promise.all(
        pairs.map(async pair => {
          const average = await BinanceService.getAverage(pair.symbol);
          await queryRunner.manager.save(PairPriceHistory, {
            symbol: pair.symbol,
            price: +average.price
          });
        })
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
