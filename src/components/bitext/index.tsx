import {FC} from 'react';
import {Pressable, StyleProp, Text, TextStyle, View} from 'react-native';
import stylesheet from './stylesheet';

interface BitextProps {
  leftText: string | string[];
  rightText: string;
  leftStyle?: StyleProp<TextStyle>;
  rightStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Bitext: FC<BitextProps> = ({
  leftText = 'leftText',
  rightText = 'rightText',
  leftStyle = {},
  rightStyle = {},
  onPress = () => {},
}) => {
  return (
    <Pressable style={stylesheet.container} onPress={onPress}>
      <Text style={[stylesheet.text, leftStyle]}>{leftText}</Text>
      <Text style={[stylesheet.text, rightStyle]}>{rightText}</Text>
    </Pressable>
  );
};

export default Bitext;
