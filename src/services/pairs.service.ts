import { getRepository } from 'typeorm';
import { Pairs } from '../models/pairs.model';

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
}
