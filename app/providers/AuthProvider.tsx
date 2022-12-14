import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { createContext, FC, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { auth, db, login, logout, register } from '../firebase';

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name',
      });
    } catch (error: any) {
      Alert.alert('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);

    try {
      await logout();
    } catch (error: any) {
      Alert.alert('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    []
  );

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      register: registerHandler,
      logout: logoutHandler,
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
