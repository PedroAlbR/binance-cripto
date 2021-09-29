import { PairsModel } from '../models/pairs.model';

export class PairsService {
  getAll() {
    return PairsModel.find();
  }

  async create() {
    await PairsModel.create();
  }
}
