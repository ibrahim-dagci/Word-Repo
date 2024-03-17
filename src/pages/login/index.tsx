import React from 'react';
import stylesheet from './stylesheet';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackNavigationProps} from '../../types';

const Login = ({navigation}: RootStackNavigationProps) => {
  return (
    <SafeAreaView style={stylesheet.container}>
      <Text></Text>
      <Button
        title="Log In"
        onPress={() => {
          navigation.navigate('App', {userId: '1234'});
        }}></Button>
    </SafeAreaView>
  );
};
export default Login;
