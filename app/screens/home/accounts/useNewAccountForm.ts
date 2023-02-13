import { useState, useMemo, useEffect } from 'react';
import { Alert } from 'react-native';
import { useAccount } from '../../../providers/AccountProvider';
import { CardType, Currency } from '../../../types/account';

type Steps = 'Currency' | 'Type' | 'Submit';

export const useNewAccountForm = () => {
  const [step, setStep] = useState<Steps | null>(null);
  const [currency, setCurrency] = useState<Currency | null>(null);
  const [cardType, setCardType] = useState<CardType | null>(null);

  const { createNewAccount } = useAccount();

  const cardTypeButton = (type: CardType) => ({
    onPress: () => {
      setCardType(type);
      setStep('Submit');
    },
    text: type,
  });

  const currencyButton = (currency: Currency) => ({
    onPress: () => {
      setCurrency(currency);
      setStep('Type');
    },
    text: currency,
  });

  useEffect(() => {
    if (step === 'Currency') {
      return Alert.alert(
        'Currency',
        'Select account currency:',
        [currencyButton('RUB'), currencyButton('USD')],
        { cancelable: false }
      );
    }

    if (step === 'Type') {
      return Alert.alert(
        'Card Type',
        'Select card type:',
        [cardTypeButton('All Airline'), cardTypeButton('Black')],
        { cancelable: false }
      );
    }

    if (cardType && currency && step === 'Submit') {
      createNewAccount({ currency, type: cardType });
      setStep(null);
    }
  }, [step]);

  return useMemo(
    () => ({
      setStep,
    }),
    []
  );
};
