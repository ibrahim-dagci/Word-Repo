import {FC} from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import stylesheet from './stylesheet';

interface BitextProps {
  leftText: string;
  rightText: string;
  leftStyle?: StyleProp<TextStyle>;
  rightStyle?: StyleProp<TextStyle>;
}

const Bitext: FC<BitextProps> = ({
  leftText = 'leftText',
  rightText = 'rightText',
  leftStyle = {},
  rightStyle = {},
}) => {
  return (
    <View style={stylesheet.container}>
      <Text style={[stylesheet.text, leftStyle]}>{leftText}</Text>
      <Text style={[stylesheet.text, rightStyle]}>{rightText}</Text>
    </View>
  );
};

export default Bitext;
