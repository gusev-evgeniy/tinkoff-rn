import { FC } from 'react';
import { Text, View } from 'react-native';
import { AvatarText, StyledAvatar } from '../../styles';

type Props = {
  name: string | null;
  size?: 'small' | 'large';
};

export const Avatar: FC<Props> = ({ name, size }) => {
  console.log(name);

  return (
    <StyledAvatar>
      <AvatarText>{name?.slice(0, 1)}</AvatarText>
    </StyledAvatar>
  );
};
