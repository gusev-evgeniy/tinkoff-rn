import { Request, Response } from 'express';
import UserEntity from '../entities/user';
import { getDataFromJWT } from '../utils/user';

export default async (req: Request, res: Response, next: () => void) => {
  try {
    const token: string | undefined = req.cookies.tinkoffToken;
    const data = getDataFromJWT(token);
    if (!data?.id) throw Error();

    const user = await UserEntity.findOneByOrFail({ id: data.id });

    res.locals.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: `User don't authorized` });
  }
};
