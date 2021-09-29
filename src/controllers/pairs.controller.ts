import { Request, Response } from 'express';
import { PairsService } from '../services/pairs.service';

const pairsService = new PairsService();

export class PairsController {
  async getAll(req: Request, res: Response) {
    const data = await pairsService.getAll();

    res.send(data);
  }

  async create(req: Request, res: Response) {
    await pairsService.create();
    res.send(req.body);
  }
}
