/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import DashBoardPage from '../../Pages/DashBoardPage';
import HomePage from '../../Pages/HomePage';
import SettingsPage from '../../Pages/SettingsPage';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const ICON_SIZE = 20;
  const ACTIVE_COLOR = '#2d2e2e';
  const INACTIVE_COLOR = '#a7a9ab';

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: ACTIVE_COLOR,
          tabBarInactiveTintColor: INACTIVE_COLOR,
          tabBarStyle: {height: 60, paddingBottom: 20},
        }}>
        <Screen
          name="DashBoard"
          component={DashBoardPage}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="tachometer-alt"
                size={ICON_SIZE}
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              />
            ),
            headerShown: false,
          }}
        />
        <Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                size={ICON_SIZE}
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              />
            ),
            headerShown: false,
          }}
        />
        <Screen
          name="Rewards"
          component={SettingsPage}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="users"
                size={ICON_SIZE}
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              />
            ),
            headerShown: false,
          }}
        />
        <Screen
          name="Settings"
          component={SettingsPage}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="cogs"
                size={ICON_SIZE}
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              />
            ),
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
