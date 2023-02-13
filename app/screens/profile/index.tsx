import { useState } from 'react';
import { Layout } from '../../components/layout';
import { Loader } from '../../components/ui/loader';
import { MyButton } from '../../components/ui/myButton';
import { useAuth } from '../../providers/AuthProvider';
import { StyledText, StyledView } from '../../styledComponents';
import { StyledInput } from '../../styles';
import { StyledAuth, StyledAuthName } from '../auth/styles';

const Profile = () => {
  const { user, logout, update, isLoading } = useAuth();
  const [name, setName] = useState(user?.name);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmitHandler = async () => {
    await update(name);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <Layout>
      <StyledAuth>
        <StyledAuthName>Profile</StyledAuthName>

        {isSuccess && (
          <StyledView className='bg-green-500 p-5 py-3 rounded-lg w-full mb-4'>
            <StyledText className='text-white text-center'>
              Profile updated
            </StyledText>
          </StyledView>
        )}

        <StyledInput
          placeholder='Name'
          onChangeText={setName}
          value={name || ''}
          secureTextEntry={false}
          autoCapitalize='none'
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
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
          </>
        )}
      </StyledAuth>
    </Layout>
  );
};

export default Profile;
