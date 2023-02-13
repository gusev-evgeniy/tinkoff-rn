import { Request, Response } from 'express';
import AccountEntity from '../entities/account';

class Account {
  async create(req: Request, res: Response) {
    try {
      const user = res.locals.user;

      const { type, currency } = req.body;
      await AccountEntity.create({
        type,
        currency,
        user,
      }).save();

      const accounts = await AccountEntity.find({
        where: { userId: user.id },
      });

      return res.json(accounts);
    } catch (error) {
      console.log('Create accounts error:', error.message);
      return res.status(500).json({ message: error.message });
    }
  }

  async get(_: Request, res: Response) {
    try {
      const accounts = await AccountEntity.find({
        where: { userId: res.locals.user.id },
        order: { createdAt: 'DESC' },
      });

      return res.json(accounts);
    } catch (error) {
      console.log('Get accounts error:', error.message);
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new Account();
