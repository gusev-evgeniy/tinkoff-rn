import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import bcrypt from 'bcrypt';

import Base from '.';
import Account from './account';

@Entity()
export default class User extends Base {
  @Column({ nullable: false, unique: true })
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column({ nullable: false })
  password: string;

  @Column({ default: 'No Name' })
  name: string;

  @OneToMany(() => Account, account => account.user)
  accounts: Account[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
