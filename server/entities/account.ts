import { Column, Entity, ManyToOne } from 'typeorm';
import Base from '.';
import User from './user';

@Entity()
export default class Account extends Base {
  @Column({ enum: ['black', 'dd'], default: 'black' })
  type: string;

  @Column({ enum: ['ruble', 'dollar'], default: 'dollar' })
  currency: string;

  @Column({ default: 0 })
  cash: number;

  @Column({ unique: true })
  number: number;

  @ManyToOne(() => User, user => user.accounts)
  user: User;
}
