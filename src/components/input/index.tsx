import stylesheet from './stylesheet';
import {
    FC
} from 'react';
import {
    KeyboardTypeOptions,
    ReturnKeyTypeOptions,
    StyleProp,
    TextInput,
    ViewStyle,
    View,
} from 'react-native';

interface InputProps {
  placeholder?: string;
  keyboard?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  isSecure?: boolean;
  value?: string;
  onChangeText?: (value: string) => void;
  onSubmitEnding?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Input: FC<InputProps> = ({
    placeholder,
    onChangeText = () => {},
    onSubmitEnding,
    keyboard = 'default',
    isSecure = false,
    returnKeyType = 'default',
    value = '',
    style,
}) => {
    return (
        <View style={[stylesheet.container, style]}>
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
