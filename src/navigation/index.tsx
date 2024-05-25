import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';
import React, {useContext} from 'react';
import {AppContext} from '../context';
import Authnavigation from './auth';
import AppNavigation from './app';

const RootStack = createNativeStackNavigator<RootStackParamList>();

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
