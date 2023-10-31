import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

const SearchScreen: ScreenProps<'Search'> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
