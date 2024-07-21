import stylesheet from './stylesheet';
import {
    FC
} from 'react';
import {
    Pressable, 
    StyleProp, 
    TextStyle, 
    Text, 
    View
} from 'react-native';

interface BitextProps {
  leftText: string | string[];
  rightText: string;
  containerStyle?: StyleProp<TextStyle>;
  leftStyle?: StyleProp<TextStyle>;
  rightStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Bitext: FC<BitextProps> = ({
    rightText = 'rightText',
    leftText = 'leftText',
    containerStyle = {
    },
    onPress = () => {},
    rightStyle = {
    },
    leftStyle = {
    },
}) => {
    return (
        <Pressable style={[stylesheet.container, containerStyle]} onPress={onPress}>
            <Text style={[stylesheet.left, leftStyle]}>{leftText}</Text>
            <Text style={[stylesheet.right, rightStyle]}>{rightText}</Text>
        </Pressable>
    );
};

export default Bitext;
