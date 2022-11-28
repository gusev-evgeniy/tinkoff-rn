import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { useAuth } from '../../hooks/useAuth';
import Auth from '../screens/auth';
import Home from '../screens/home';
import Payments from '../screens/payment';
import Profile from '../screens/profile';
import Services from '../screens/services';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name='Auth' component={Auth}></Stack.Screen>
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
