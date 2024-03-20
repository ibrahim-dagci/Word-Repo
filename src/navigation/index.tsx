import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppStackParamList,
  AuthStackParamList,
  RootStackNavigationProps,
  RootStackNavigationPropsApp,
  RootStackParamList,
} from './types';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const Authnavigation = ({navigation}: RootStackNavigationProps) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
const AppNavigation = ({route}: RootStackNavigationPropsApp) => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={HomePage}
        initialParams={{message: route.params.userId}}></AppStack.Screen>
    </AppStack.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name="Auth"
          component={Authnavigation}></RootStack.Screen>
        <RootStack.Screen
          name="App"
          component={AppNavigation}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
