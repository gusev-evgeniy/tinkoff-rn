import { Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

import UserEntity from '../entities/user';

export const checkPassword = (password: string, candidate: string) => {
  return bcrypt.compareSync(password, candidate);
};

export const createJWT = ({ email, id, name }: UserEntity) => {
  return jwt.sign({ email, id, name }, process.env.JWT_SECRET || 'secret');
};

export const getDataFromJWT = (token?: string): { id: string } | undefined => {
  if (!token) {
    return;
  }

  return jwt.verify(token, process.env.JWT_SECRET || 'secret') as {
    id: string;
  };
};

export const createCookie = (res: Response, user: UserEntity) => {
  const token = createJWT(user);

  return res.set(
    'Set-Cookie',
    cookie.serialize('tinkoffToken', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
  );
};

export const clearCookie = (res: Response) => {
  return res.set(
    'Set-Cookie',
    cookie.serialize('tinkoffToken', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0,
    })
  );
};
