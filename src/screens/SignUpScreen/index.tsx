import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '@navigations/root-stack';

const SignUpScreen: ScreenProps<'SignUp'> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SignUp Screen</Text>
    </View>
  );
};

export default SignUpScreen;
