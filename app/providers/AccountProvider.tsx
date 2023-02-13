import { createContext, FC, useContext, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { AccountAPI } from '../api/account';
import { AccountBase, NewAccountProps } from '../types/account';

type AccountContextType = {
  loadAccounts: () => void;
  isLoading: boolean;
  accounts: AccountBase[];
  createNewAccount: (data: NewAccountProps) => Promise<void>;
};

export const AccountContext = createContext({} as AccountContextType);

export const AccountProvider: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accounts, setAccounts] = useState<AccountBase[]>([]);

  const loadAccounts = () => {
    try {
      setIsLoading(true);

      const fetchAccounts = async () => {
        const { data } = await AccountAPI.get();
        setAccounts(data);
      };

      fetchAccounts();
    } catch (error) {
      Alert.alert('Accounts error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createNewAccount = async (data: NewAccountProps) => {
    try {
      setIsLoading(true);
      const response = await AccountAPI.create(data);
      setAccounts(response.data);
    } catch (error) {
      Alert.alert('Create account error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      loadAccounts,
      isLoading,
      accounts,
      createNewAccount,
    }),
    [accounts, isLoading]
  );

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
