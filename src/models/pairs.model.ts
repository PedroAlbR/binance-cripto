import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PAIRS')
export class Pairs {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column('varchar', { name: 'SYMBOL' })
  symbol: string;
}
