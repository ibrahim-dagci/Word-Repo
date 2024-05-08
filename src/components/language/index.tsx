import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import stylesheet from './stylesheet';
import {} from 'react-native-svg';

interface LanguageCardProps {
  text: string;
}

const LanguageCard: FC<LanguageCardProps> = ({text = 'Language'}) => {
  return (
    <View style={stylesheet.container}>
      <Image style={stylesheet.image} />
      <Text style={stylesheet.text}>{text}</Text>
    </View>
  );
};

export default LanguageCard;
