/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';

import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Welcome from './src/components/welcome/Welcome';

import Feed from './src/components/dashboard/feed';
import Profile from './src/components/dashboard/profile';
import Settings from './src/components/dashboard/settings';

import Icon from 'react-native-vector-icons/MaterialIcons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;

const MenuIcon = (navigation) => <Icon name="menu" size={30} color='#000' style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return { headerTitle: routeName };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return { headerLeft: MenuIcon(navigation) };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: { screen: DashboardStackNavigator }
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Welcome: { screen: Welcome },
    AppDrawer: { screen: AppDrawerNavigator },
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
