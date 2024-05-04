import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppStackParamList,
  AuthStackParamList,
  RootStackNavigationPropsApp,
  RootStackNavigationPropsAuth,
  RootStackParamList,
} from './types';

import HomePage from '../pages/home';
import LoginPage from '../pages/splash';
import {AppContext} from '../context';
import {Profile} from '../pages';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const Authnavigation = ({navigation, route}: RootStackNavigationPropsAuth) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
        initialParams={route.params}
      />
    </AuthStack.Navigator>
  );
};
const AppNavigation = ({route}: RootStackNavigationPropsApp) => {
  const {values} = useContext(AppContext);
  const {theme} = values;
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={HomePage}
        initialParams={{message: route.params.userId}}
        options={{
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.colors.header},
          headerTitleAlign: 'center',
          headerTintColor: '#dddddd',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      ></AppStack.Screen>
      <AppStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.colors.header},
          headerTitleAlign: 'center',
          headerTintColor: '#dddddd',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      ></AppStack.Screen>
    </AppStack.Navigator>
  );
};
const Navigation = () => {
  const {values} = useContext(AppContext);
  const {isAuth} = values;

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuth && (
          <RootStack.Group>
            <RootStack.Screen name="Auth" component={Authnavigation} />
          </RootStack.Group>
        )}
        <RootStack.Group>
          <RootStack.Screen name="App" component={AppNavigation} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
