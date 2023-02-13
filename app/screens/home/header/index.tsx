import { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { StyledHeader } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { StyledText, StyledView } from '../../../styledComponents';
import { useAuth } from '../../../providers/AuthProvider';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const Header: FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation<NavigationProps>();

  if (!user) {
    return null;
  }

  const { name } = user;

  return (
    <TouchableOpacity onPress={() => navigate('Profile')}>
      <StyledHeader>
        <StyledView className='h-12 w-12 bg-gray-400 rounded-full flex flex-col justify-center items-center'>
          <StyledText className='text-lg font-bold text-gray-100'>
            {name.slice(0, 1)}
          </StyledText>
        </StyledView>
        <StyledView className='ml-4'>
          <StyledText className='font-bold'>{name}</StyledText>
        </StyledView>
        <Entypo
          name='chevron-small-right'
          size={28}
          style={{ color: 'rgb(31, 41, 55)' }}
        />
      </StyledHeader>
    </TouchableOpacity>
  );
};
