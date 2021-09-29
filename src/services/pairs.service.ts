import { getRepository } from 'typeorm';
import { Pairs } from '../models/pairs.model';

export class PairsService {
  getAll() {
    return getRepository(Pairs).find();
  }

  async create(pair: Pairs) {
    const pairsRepository = getRepository(Pairs);
    const newPair = pairsRepository.create(pair);

    await pairsRepository.save(newPair);
  }
}
