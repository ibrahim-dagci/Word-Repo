import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import stylesheet from './stylesheet';
import {FC, useState} from 'react';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  variant: 'ghost' | 'default';
  title: string;
}

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  variant = 'default',
}) => {
  return (
    <TouchableOpacity
      style={[
        variant === 'default'
          ? stylesheet.containerDefault
          : stylesheet.containerGhost,
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          variant === 'default'
            ? stylesheet.titleDefault
            : stylesheet.titleGhost,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
