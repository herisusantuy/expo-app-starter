import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

import { useNavigation } from '@react-navigation/native';
import { TextInput, Wrapper, Button } from '@components/molecules';
import { Icons, Typography } from '@components/atoms';

const SignInScreen: ScreenProps<'SignIn'> = () => {
  const navigation = useNavigation();

  const [state, setState] = useState<string>('');
  return (
    <Wrapper bg='white'>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h3'>Sign In Screen</Typography>
        <View>
          <TextInput
            label='Email'
            placeholder='Input email'
            value={state}
            keyboardType='email-address'
            onChangeText={setState}
          />
          <TextInput
            label='Password'
            placeholder='Input password'
            isSecureText={true}
          />
          <View>
            <Button onPress={() => {}}>
              <Text>Sign In</Text>
            </Button>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              <Button onPress={() => {}} icon='logo-facebook'></Button>
              <Button onPress={() => {}} icon='logo-google'></Button>
              <Button onPress={() => {}} icon='logo-apple'></Button>
            </View>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default SignInScreen;
