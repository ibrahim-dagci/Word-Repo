import React from 'react';
import {View, Text} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationProps} from '../../types/navigation';

const Home = ({route}: AppStackNavigationProps) => {
  return (
    <View style={stylesheet.container}>
      <Text>UserId:{route.params.message}</Text>
    </View>
  );
};
export default Home;
