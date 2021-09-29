import { BINANCE_HOST } from '../constants';
import * as rest from './rest.service';

interface AverageResponse {
  mins: number;
  price: string;
}
export function getAverage(symbol: string): Promise<AverageResponse> {
  const url = `${BINANCE_HOST}/avgPrice?symbol=${symbol}`;

  return rest.get(url) as Promise<AverageResponse>;
}
