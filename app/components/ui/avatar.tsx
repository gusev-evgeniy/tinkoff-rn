import { FC } from 'react';
import { Text, View } from 'react-native';

import { styled } from 'nativewind';

export const StyledView = styled(View);
export const StyledText = styled(Text);

type Props = {
  name: string | null;
  size?: 'small' | 'large';
};

export const Avatar: FC<Props> = ({ name }) => {
  return (
    <StyledView className='p-5 bg-blue-600  '>
      {/* <StyledText className='font-bold'>{name?.slice(0, 1)}</StyledText> */}
    </StyledView>
  );
};
