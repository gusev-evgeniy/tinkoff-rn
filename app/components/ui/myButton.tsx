import { FC } from 'react';
import { Text } from 'react-native';
import { StyledTouchableHighlight } from '../../styledComponents';

type Props = {
  title: string;
  colors: {
    base: string;
    hover: string;
  };
  onPress: () => void;
};

export const MyButton: FC<Props> = ({ title, colors, onPress }) => {
  return (
    <StyledTouchableHighlight
      style={{ backgroundColor: colors.base, padding: 12 }}
      className='w-full flex items-center mb-4 rounded-lg'
      underlayColor={colors.base}
      onPress={onPress}>
      <Text>{title}</Text>
    </StyledTouchableHighlight>
  );
};
