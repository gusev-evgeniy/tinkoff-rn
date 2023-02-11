import { Request, Response } from 'express';
import AccountEntity from '../entities/account';

class Account {
  async create(req: Request, res: Response) {
    try {
      const { type, currency } = req.body;

      const account = await AccountEntity.create({
        type,
        currency,
        user: res.locals.user.id,
      }).save();
      console.log('account', account);

      return res.json({ message: 'Success' });
    } catch (error) {
      console.log('Create accounts error:', error.message);
      return res.json({ message: error.message });
    }
  }

  async get(_: Request, res: Response) {
    try {
      const accounts = await AccountEntity.find({
        where: { user: res.locals.user.id },
      });

      return res.json(accounts);
    } catch (error) {
      console.log('Get accounts error:', error.message);
      return res.json({ message: error.message });
    }
  }
}

export default new Account();
