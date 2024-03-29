import { useState } from 'react';
import { Text } from 'react-native';
import { StyledInput } from '../../styles';
import { StyledLayout } from '../../components/layout/styles';
import { Loader } from '../../components/ui/loader';
import { MyButton } from '../../components/ui/myButton';
import { StyledAuth, StyledAuthName, StyledUtilityButton } from './styles';
import { useAuth } from '../../providers/AuthProvider';

const isEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Auth = () => {
  const { isLoading, login, register } = useAuth();

  const [isReg, setIsReg] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => email.match(isEmail);

  const submitHandler = async () => {
    if (isReg) await register(email, password);
    else await login(email, password);

    setEmail('');
    setPassword('');
  };

  console.log(' isLoading', isLoading);

  return (
    <StyledLayout>
      <StyledAuth>
        <StyledAuthName>{isReg ? 'Sing Up' : 'Sign In'}</StyledAuthName>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <StyledInput
              placeholder='Enter email'
              onChangeText={setEmail}
              value={email}
              autoCapitalize='none'
            />
            <StyledInput
              placeholder='Password'
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              autoCapitalize='none'
            />

            <MyButton
              onPress={submitHandler}
              title={`Let's go`}
              colors={{ base: 'rgb(253, 224, 71)', hover: '#FBBF24' }}
            />

            <StyledUtilityButton onPress={() => setIsReg(prev => !prev)}>
              <Text style={{ color: '#ccc' }}>
                {isReg ? 'Login' : 'Register'}
              </Text>
            </StyledUtilityButton>
          </>
        )}
      </StyledAuth>
    </StyledLayout>
  );
};

export default Auth;
