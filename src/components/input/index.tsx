import {FC} from 'react';
import {TextInput, View} from 'react-native';
import stylesheet from './stylesheet';

interface InputProps {
  placeholder?: string;
}

const Input: FC<InputProps> = ({placeholder}) => {
  return (
    <View style={stylesheet.container}>
      <TextInput placeholder={placeholder} style={stylesheet.input} />
    </View>
  );
};

export default Input;
