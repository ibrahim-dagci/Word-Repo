import {FC} from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
  View,
} from 'react-native';
import stylesheet from './stylesheet';

interface InputProps {
  placeholder?: string;
  keyboard?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  isSecure?: boolean;
  value?: string;
  onChangeText?: (value: string) => void;
  onSubmitEnding?: () => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  onChangeText = () => {},
  onSubmitEnding,
  keyboard = 'default',
  isSecure = false,
  returnKeyType = 'default',
  value = '',
}) => {
  return (
    <View style={stylesheet.container}>
      <TextInput
        placeholder={placeholder}
        style={stylesheet.input}
        placeholderTextColor={'#dadada'}
        keyboardType={keyboard}
        secureTextEntry={isSecure}
        onChangeText={onChangeText}
        value={value}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEnding}
      />
    </View>
  );
};

export default Input;
