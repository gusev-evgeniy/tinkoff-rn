import { DataSource } from 'typeorm';
import User from './entities/user';
import Account from './entities/account';

const myDataSource = new DataSource({
  type: (process.env.DB_TYPE as 'postgres') || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'tinkoff_native',
  entities: [User, Account],
  logging: true,
  synchronize: true,
});

export default myDataSource;
