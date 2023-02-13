import { BeforeInsert, Column, Entity, ManyToOne } from 'typeorm';
import Base from '.';
import { generateCardNumber } from '../utils/accounts';
import User from './user';

@Entity()
export default class Account extends Base {
  @Column({ enum: ['Black', 'All Airline'], default: 'Black' })
  type: string;

  @Column({ enum: ['RUB', 'USD'], default: 'USD' })
  currency: string;

  @Column({ default: 0 })
  cash: number;

  @Column({ unique: true })
  cardNumber: string;

  @ManyToOne(() => User, user => user.accounts)
  user: User;

  @Column({ type: 'uuid' })
  userId: string;

  @BeforeInsert()
  async hashPassword() {
    this.cardNumber = generateCardNumber();
  }
}
