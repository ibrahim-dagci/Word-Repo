import stylesheet from './stylesheet';
import {
    FC
} from 'react';
import {
    TextInputEndEditingEventData,
    NativeSyntheticEvent,
    ReturnKeyTypeOptions,
    KeyboardTypeOptions,
    StyleProp,
    TextInput,
    ViewStyle,
    View,
} from 'react-native';

interface InputProps {
    onEndEditing?: (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
    onChangeText?: (value: string) => void;
    returnKeyType?: ReturnKeyTypeOptions;
    keyboard?: KeyboardTypeOptions;
    style?: StyleProp<ViewStyle>;
    onSubmitEnding?: () => void;
    placeholder?: string;
    isSecure?: boolean;
    value?: string;
}

const Input: FC<InputProps> = ({
    placeholder,
    onChangeText = () => {},
    onSubmitEnding,
    onEndEditing,
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
                onEndEditing={onEndEditing}
            />
        </View>
    );
};

export default Input;
