import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '@screens/HomeScreen';
import SearchScreen from '@screens/SettingScreen';
import CommunityScreen from '@screens/CommunityScreen';
import NotificationScreen from '@screens/Notification';
import MessageScreen from '@screens/Message';

import { Icons } from '@components/atoms';

export type AppStackParamList = {
  Home: undefined;
  Search: undefined;
  Community: undefined;
  Notification: undefined;
  Message: undefined;
};

const Tab = createBottomTabNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size = 25 }) => {
            return (
              <Icons.MaterialCommunityIcons
                name={focused ? 'home-variant' : 'home-variant-outline'}
                size={size}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size = 25 }) => {
            return (
              <Icons.Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={size}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Community'
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size = 25 }) => {
            return (
              <Icons.MaterialCommunityIcons
                name={focused ? 'account-group' : 'account-group-outline'}
                size={25}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size = 25 }) => {
            return (
              <Icons.Ionicons
                name={focused ? 'notifications' : 'notifications-outline'}
                size={size}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Message'
        component={MessageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size = 25 }) => {
            return (
              <Icons.Ionicons
                name={focused ? 'mail' : 'mail-outline'}
                size={size}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStackNavigator;
