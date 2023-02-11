import { UserType } from '../types/user';
import { instance } from './index';

export const AuthAPI = {
  async me() {
    return await instance.get<UserType>(`auth/me`);
  },
  async login(email: string, password: string) {
    return await instance.post<UserType>(`auth/login`, { email, password });
  },
  async registrate(email: string, password: string) {
    return await instance.post<UserType>(`auth/create`, {
      email,
      password,
    });
  },
  logout() {
    return instance.delete<{ message: string }>(`auth/logout`);
  },
};
