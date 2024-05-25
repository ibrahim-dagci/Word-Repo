import React, {FC} from 'react';
import {
  Text,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
} from 'react-native';
import stylesheet from './stylesheet';

interface LanguageCardProps {
  text: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
}

const LanguageCard: FC<LanguageCardProps> = ({
  text = 'Language',
  imageSource = require('../../assets/img/test.png'),
  onPress = () => {},
}) => {
  return (
    <Pressable style={stylesheet.container} onPress={onPress}>
      <Image
        style={stylesheet.image}
        source={imageSource}
        resizeMode="contain"
      />
      <Text style={stylesheet.text}>{text}</Text>
    </Pressable>
  );
};

export default LanguageCard;
