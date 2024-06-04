import {Button, Input, Recorder} from '../../../../components';
import {AppContext} from '../../../../context';
import React, {useContext} from 'react';
import stylesheet from './stylesheet';
import {View} from 'react-native';
import {ProfileIcon, SaveIcon} from '../../../../assets/svg';

const Card = () => {
  const {values} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;

  return (
    <View style={stylesheet.container}>
      <Button
        onPress={() => {}}
        variant="custom"
        style={{position: 'absolute', right: 15, top: 15}}
        customContent={<SaveIcon size={25} color={colors.gradient[2]} />}
      />
      <View style={stylesheet.inputContainer}>
        <Input
          placeholder="*Word"
          style={{borderColor: colors.gradient[2], borderWidth: 1}}
        />
        <Input
          placeholder="*Mean"
          style={{borderColor: colors.gradient[2], borderWidth: 1}}
        />
      </View>
      <Recorder />
    </View>
  );
};

export default Card;
