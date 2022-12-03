import { useState } from 'react';
import { Text, View } from 'react-native';
import { Layout } from '../../components/layout';
import { MyButton } from '../../components/ui/myButton';
import { useAuth } from '../../hooks/useAuth';
import { StyledInput } from '../../styles';
import { StyledAuth, StyledAuthName } from '../auth/styles';

const Profile = () => {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.displayName);

  const onSubmitHandler = () => {
    console.log('name', name);
  };

  return (
    <Layout>
      <StyledAuth>
        <StyledAuthName>Profile</StyledAuthName>
        <StyledInput
          placeholder='Name'
          onChangeText={setName}
          value={name || ''}
          secureTextEntry={true}
          autoCapitalize='none'
        />

        <MyButton
          onPress={onSubmitHandler}
          title='Update Profile'
          colors={{ base: 'rgb(253, 224, 71)', hover: '#FBBF24' }}
        />
        <MyButton
          onPress={logout}
          title='Logout'
          colors={{ base: 'rgb(229, 231, 235)', hover: '#D6D8DB' }}
        />
      </StyledAuth>
    </Layout>
  );
};

export default Profile;
