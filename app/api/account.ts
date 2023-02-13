import { instance } from '.';
import { AccountBase, NewAccountProps } from '../types/account';

export const AccountAPI = {
  async get() {
    return await instance.get<AccountBase[]>(`account`);
  },
  async create(data: NewAccountProps) {
    return await instance.post<AccountBase[]>(`account`, data)
  }
};
