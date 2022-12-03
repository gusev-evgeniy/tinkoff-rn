import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { useAuth } from '../hooks/useAuth';
import Auth from './auth';
import Home from './home';
import Payments from './payment';
import Profile from './profile';
import Services from './services';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name='Home' component={Home}></Stack.Screen>
            <Stack.Screen name='Payments' component={Payments}></Stack.Screen>
            <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
            <Stack.Screen name='Services' component={Services}></Stack.Screen>
          </>
        ) : (
          <Stack.Screen name='Auth' component={Auth}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
