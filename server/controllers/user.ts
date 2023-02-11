import { Request, Response } from 'express';
import UserEntity from '../entities/user';
import { checkPassword, clearCookie, createCookie } from '../utils/user';

class User {
  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body || {};

      const candidate = await UserEntity.findOne({ where: { email } });
      if (candidate) throw Error(`user with this email already exist`);

      const user = await UserEntity.create({ email, password }).save();

      createCookie(res, user);

      const { password: _, ...rest } = user;

      return res.json(rest);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
      console.log('Create user error:', error);
    }
  }

  async me(_: Request, res: Response) {
    return res.json(res.locals.user);
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw Error(`Wrong email or password`);

      const candidate = await UserEntity.findOne({
        where: { email: email as string },
      });
      if (!candidate) throw Error(`Wrong email or password`);

      const isCorrectPassword = checkPassword(
        password as string,
        candidate.password
      );
      if (!isCorrectPassword) throw Error(`Wrong email or password`);

      createCookie(res, candidate);

      const { password: _, ...rest } = candidate;

      res.json({ user: rest });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
      console.log('Login error:', error);
    }
  }

  async getUsers(_: Request, res: Response) {
    try {
      const users = await UserEntity.find();

      return res.json(users);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
      console.log('Get users error:', error);
    }
  }

  async logout(_: Request, res: Response) {
    clearCookie(res);

    return res.json({ message: 'Success' });
  }

  async update(req: Request, res: Response) {
    const user = res.locals.user;
    user.name = req.body.name;
    await user.save();
    console.log(`user :>>`, user);
    //   const room = await RoomEntity.createQueryBuilder()
    //     .update(roomInfo)
    //     .where('id = :id', { id })
    //     .returning('*')
    //     .execute();

    return res.json(user);
  }
}

export default new User();
