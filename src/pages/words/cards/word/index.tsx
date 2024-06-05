import {AppContext} from '../../../../context';
import {Bitext} from '../../../../components';
import React, {useContext} from 'react';
import stylesheet from './stylesheet';
import {View} from 'react-native';

const Card = () => {
  const {values} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;

  return (
    <View style={stylesheet.container}>
      <Bitext
        leftText={'Word:'}
        rightText="word"
        containerStyle={{borderColor: colors.gradient[2], borderWidth: 1}}
      />
      <Bitext
        leftText={'Mean:'}
        rightText="kelime"
        containerStyle={{borderColor: colors.gradient[2], borderWidth: 1}}
      />
      <Bitext
        leftText={'Other Means:'}
        rightText=""
        containerStyle={{
          borderColor: colors.gradient[2],
          borderWidth: 1,
          gap: 10,
        }}
      />
    </View>
  );
};

export default Card;
