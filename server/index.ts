import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import db from './db';
import routes from './routes';

const app = express();

const PORT = process.env.PORT || 5555;

const start = async () => {
  try {
    await db
      .initialize()
      .then(() => console.log('Data Source has been initialized!'))
      .catch(err =>
        console.error('Error during Data Source initialization:', err)
      );

    app.use(
      cors({
        credentials: true,
        origin: '',
      })
    );
    app.use(express.json());
    app.use(cookieParser());
    app.use('/api', routes);

    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log('Something goes wrong');
  }
};

start();
