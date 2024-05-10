import React, {FC} from 'react';
import {Text, View, Image, ImageSourcePropType, Platform} from 'react-native';
import stylesheet from './stylesheet';

interface LanguageCardProps {
  text: string;
  imageSource?: ImageSourcePropType;
}

const LanguageCard: FC<LanguageCardProps> = ({
  text = 'Language',
  imageSource = require('../../assets/img/test.png'),
}) => {
  return (
    <View style={stylesheet.container}>
      <Image
        style={stylesheet.image}
        source={imageSource}
        resizeMode="contain"
      />
      <Text style={stylesheet.text}>{text}</Text>
    </View>
  );
};

export default LanguageCard;
