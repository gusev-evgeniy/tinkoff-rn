import { FC, memo } from 'react';
import { StyledText, StyledView } from '../../../../styledComponents';
import { AccountBase } from '../../../../types/account';

type Props = Pick<AccountBase, 'type' | 'cash' | 'currency'>

export const Balance: FC<Props> = memo(({ cash, type, currency }) => {
  return (
    <StyledView className='flex-1 pl-2'>
      <StyledText className='text-base opacity-70 '>
        {`Visa ${type}`}
      </StyledText>
      <StyledText className=' text-sm font-semibold'>{`${currency} ${cash}.00`}</StyledText>
    </StyledView>
  );
});
