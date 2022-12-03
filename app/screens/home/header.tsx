import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Avatar } from '../../components/ui/avatar';
import { useAuth } from '../../hooks/useAuth';

import { Entypo } from '@expo/vector-icons';
import { StyledHeader } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const Header: FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation<NavigationProps>();

  if (!user) {
    return null;
  }

  const { displayName } = user;

  return (
    <TouchableOpacity onPress={() => navigate('Profile')}>
      <StyledHeader>
        <Avatar name={displayName} />
        <Text>{displayName}</Text>
        <Entypo
          name='chevron-small-right'
          size={28}
          style={{ color: 'rgb(31, 41, 55)' }}
        />
      </StyledHeader>
    </TouchableOpacity>
  );
};
