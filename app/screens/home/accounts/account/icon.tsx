import { StyledView } from "../../../../styledComponents"
import { FontAwesome } from '@expo/vector-icons';
import { FC } from "react";
import { Currency as CurrencyType  } from "../../../../types/account";
export const Currency: FC<{currency: CurrencyType}> = ({ currency }) => {
  
  return (
    <StyledView className='h-10 w-10 bg-blue-500 rounded-full flex justify-center items-center'>
    <StyledView className='h-6 w-6 bg-gray-100 rounded-full flex justify-center items-center'>
      <FontAwesome color='#488f9' size={13} name={ currency === 'RUB' ? 'rub' : 'usd' } />
    </StyledView>
  </StyledView>
  )
}