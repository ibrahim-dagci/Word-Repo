import stylesheet from './stylesheet';
import {
    FC
} from 'react';
import {
    ImageSourcePropType,
    Pressable,
    Platform,
    Image,
    Text,
} from 'react-native';

interface LanguageCardProps {
  text: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
}

const LanguageCard: FC<LanguageCardProps> = ({
    text = 'Language',
    imageSource,
    onPress = () => {},
}) => {
    return (
        <Pressable style={stylesheet.container} onPress={onPress}>
            <Image
                style={stylesheet.image}
                source={imageSource ? imageSource : undefined}
                resizeMode="contain"
            />
            <Text style={stylesheet.text}>{text}</Text>
        </Pressable>
    );
};

export default LanguageCard;
