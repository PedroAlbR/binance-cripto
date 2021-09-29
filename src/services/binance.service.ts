import { BINANCE_HOST } from '../constants';
import * as rest from './rest.service';

export function getAverage(symbol: string) {
  const url = `${BINANCE_HOST}/avgPrice?symbol=${symbol}`;

  return rest.get(url);
}
