import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PAIRS')
export class Pairs {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column('varchar', { name: 'SYMBOL' })
  symbol: string;
}

@Entity('PAIR_PRICE_HISTORY')
export class PairPriceHistory {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column('varchar', { name: 'SYMBOL' })
  symbol: string;

  @Column('float', { name: 'PRICE' })
  price: number;
}
