import { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { AuthAPI } from '../api/auth';
import { UserAPI } from '../api/user';
import { UserType } from '../types/user';

type AuthContextType = {
  user: UserType | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  update: (name: string) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { data } = await AuthAPI.registrate(email, password);
      console.log(`data :>>`, data);
      setUser(data);
    } catch (error: any) {
      Alert.alert('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { data } = await AuthAPI.login(email, password);
      setUser(data);
    } catch (error: any) {
      Alert.alert('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateHandler = async (name: string) => {
    setIsLoading(true);

    try {
      const { data } = await UserAPI.update(name);
      console.log(`data :>>`, data);
      setUser(data);
    } catch (error: any) {
      Alert.alert('Update error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);

    try {
      await AuthAPI.logout();
    } catch (error: any) {
      Alert.alert('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const auth = async () => {
      setIsLoading(true);
      console.log('sdfsd');
      try {
        const { data } = await AuthAPI.me();
        console.log('sdfsddata', data);

        setUser(data);
      } catch (error: any) {
        Alert.alert('Auth error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    auth();
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      register: registerHandler,
      logout: logoutHandler,
      update: updateHandler,
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);