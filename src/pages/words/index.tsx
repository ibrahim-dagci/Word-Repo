import React from 'react';
import {View} from 'react-native';
import stylesheet from './stylesheet';
import {
  TabStackNavigationPropsChat,
  TabStackNavigationPropsLanguage,
} from '../../navigation/types';

const Words = ({route, navigation}: TabStackNavigationPropsLanguage) => {
  return <View style={stylesheet.container}></View>;
};

export default Words;
