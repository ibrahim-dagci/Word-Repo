import {View} from 'react-native';
import stylesheet from './stylesheet';
import React, {useContext} from 'react';
import {AppContext} from '../../context';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackNavigationProps} from '../../navigation/types';

const Login = ({navigation}: RootStackNavigationProps) => {
  const {theme} = useContext(AppContext);
  return (
    <View style={stylesheet.container}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={theme.colors.gradient}
        style={stylesheet.linearGradient}>
        <SafeAreaView></SafeAreaView>
      </LinearGradient>
    </View>
  );
};
export default Login;
