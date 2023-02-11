import { FC } from 'react';
import { Text } from 'react-native';
import { StyledButton } from '../../styles';

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
    <StyledButton
      baseColor={colors.base}
      underlayColor={colors.base}
      onPress={onPress}
    >
      <Text style={{}}>{title}</Text>
    </StyledButton>
  );
};
