import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import stylesheet from './stylesheet';
import {FC} from 'react';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={[style, stylesheet.container]} onPress={onPress}>
      <Text style={[stylesheet.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
