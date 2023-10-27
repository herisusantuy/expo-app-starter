import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

const SignInScreen: ScreenProps<'SignIn'> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SignIn Screen</Text>
    </View>
  );
};

export default SignInScreen;
