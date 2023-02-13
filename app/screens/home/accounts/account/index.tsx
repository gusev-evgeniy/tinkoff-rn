import { FC } from 'react';
import {
  StyledImageBackgroung,
  StyledView,
} from '../../../../styledComponents';
import { AccountBase } from '../../../../types/account';
import { Balance } from './balance';
import { Currency } from './icon';

type Props = AccountBase;

export const Account: FC<Props> = ({ cash, type, currency }) => {
  const Black = require('../../../../images/black.png');
  const Airline = require('../../../../images/airline.png');

  return (
    <StyledView className='flex justify-between w-full flex-row center py-4'>
      <Currency currency={currency} />
      <Balance cash={cash} type={type} currency={currency} />
      <StyledImageBackgroung
        source={type === 'Black' ? Black : Airline}
        resizeMode='contain'
        className='w-12'></StyledImageBackgroung>
    </StyledView>
  );
};
