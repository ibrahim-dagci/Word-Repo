import {FC} from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import stylesheet from './stylesheet';

interface InputProps {
  placeholder?: string;
  keyboard?: KeyboardTypeOptions;
  isSecure?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder,
  keyboard = 'default',
  isSecure = false,
}) => {
  return (
    <View style={stylesheet.container}>
      <TextInput
        placeholder={placeholder}
        style={stylesheet.input}
        placeholderTextColor={'#dadada'}
        keyboardType={keyboard}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
