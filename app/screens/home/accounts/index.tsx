import React, { useEffect } from 'react';
import { Loader } from '../../../components/ui/loader';
import { MyButton } from '../../../components/ui/myButton';
import { useAccount } from '../../../providers/AccountProvider';
import { StyledText, StyledView } from '../../../styledComponents';
import { Account } from './account';
import { useNewAccountForm } from './useNewAccountForm';

export const Accounts = () => {
  const { isLoading, accounts, loadAccounts } = useAccount();
  const { setStep } = useNewAccountForm();

  useEffect(() => {
    loadAccounts();
  }, []);

  if (isLoading) {
    return (
      <StyledView className='p-4 flex align-middle flex-col'>
        <Loader />
      </StyledView>
    );
  }

  if (accounts.length === 0) {
    return (
      <StyledView className='p-4 flex align-middle flex-col'>
        <StyledText className='self-center'>You don't have accounts</StyledText>
      </StyledView>
    );
  }

  return (
    <StyledView className='p-4 flex align-middle flex-col'>
      {accounts.map((item, i) => {
        const isLast = i === accounts.length - 1;

        return (
          <React.Fragment key={item.id}>
            <Account {...item} />
            {!isLast && (
              <StyledView
                style={{ height: 1 }}
                className='w-full bg-gray-200'
              />
            )}
          </React.Fragment>
        );
      })}

      <MyButton
        onPress={() => setStep('Currency')}
        title={`Apply for new product`}
        colors={{ base: 'rgb(253, 224, 71)', hover: '#FBBF24' }}
      />
    </StyledView>
  );
};
