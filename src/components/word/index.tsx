import stylesheet from './stylesheet';
import {
    FC, useContext
} from 'react';
import {
    Dimensions, 
    Pressable, 
    Text,
} from 'react-native';
import {
    CloudIcon
} from '../../assets/svg';
import {
    AppContext
} from '../../context';

interface WordItemProps {
  text?: string;
  onPress?: () => void;
}

const Word: FC<WordItemProps> = ({
    text = 'word', onPress = () => {}
}) => {
    const {
        values: {
            theme: {
                colors
            },
        },
    } = useContext(AppContext);

    return (
        <Pressable style={stylesheet.container} onPress={onPress}>
            <Text style={[stylesheet.text, {
                color: colors.gradient[2]
            }]}>{text}</Text>
            <CloudIcon
                size={Dimensions.get('window').width / 2.5}
                color={colors.secondary}
                style={[stylesheet.cloud, {
                    shadowColor: colors.shadow
                }]}
            />
        </Pressable>
    );
};

export default Word;
