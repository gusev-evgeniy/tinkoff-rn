import { instance } from '.';
import { UserType } from '../types/user';

export const UserAPI = {
  async update(name: string) {
    return await instance.put<UserType>(`user/update`, { name });
  },
};
