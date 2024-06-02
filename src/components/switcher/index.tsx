import React, {FC, useContext, useState} from 'react';
import {Switch, Text, View} from 'react-native';
import stylesheet from './stylesheet';
import {AppContext} from '../../context';

interface SwitcherProps {
  rightText?: string;
  leftText?: string;
  switchStateArray: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Switcher: FC<SwitcherProps> = ({
  leftText = 'leftText',
  rightText = 'rightText',
  switchStateArray,
}) => {
  const {
    values: {
      theme: {colors},
    },
  } = useContext(AppContext);

  const [isEnabled, setIsEnabled] = switchStateArray;
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[stylesheet.container]}>
      <Text style={[stylesheet.text, {color: colors.pageBackground}]}>
        {leftText}
      </Text>
      <Switch
        trackColor={{true: '#81b0ff'}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={[stylesheet.text, {color: colors.pageBackground}]}>
        {rightText}
      </Text>
    </View>
  );
};

export default Switcher;
