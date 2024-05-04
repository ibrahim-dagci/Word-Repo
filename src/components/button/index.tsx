import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import stylesheet from './stylesheet';
import {FC} from 'react';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  variant?: 'ghost' | 'default' | 'custom';
  title?: string;
  customContent?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  title = 'title',
  style,
  onPress,
  customContent = <Text>customContent</Text>,
  textStyle,
  variant = 'default',
}) => {
  return (
    <TouchableOpacity style={[stylesheet[variant], style]} onPress={onPress}>
      {variant === 'default' && (
        <Text style={[stylesheet.titleDefault, textStyle]}>{title}</Text>
      )}
      {variant === 'ghost' && (
        <Text style={[stylesheet.titleGhost, textStyle]}>{title}</Text>
      )}
      {variant === 'custom' && <View>{customContent}</View>}
      {variant === undefined && (
        <Text style={[stylesheet.titleDefault, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
