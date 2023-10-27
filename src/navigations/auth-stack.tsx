import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from '@screens/SignUpScreen';
import SignInScreen from '@screens/SignInScreen';

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name='SignIn' component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
