import React, {useEffect, useState} from 'react';
import {FlatList, Platform, Text, View} from 'react-native';
import stylesheet from './stylesheet';
import {Bitext} from '../../components';
import storage from '../../storage';

const Select = () => {
  const [languages, setLanguages] = useState<any[]>([]);

  useEffect(() => {
    const languagesString = storage.getString('languages');
    const languagesObject = languagesString ? JSON.parse(languagesString) : [];
    setLanguages(languagesObject);
  }, []);

  const unicodeToSymbol = (unicode: string) => {
    //Converts the flag unicode of the selected language item to emoji
    const flag = unicode
      .split(' ')
      .map((code: string) =>
        String.fromCodePoint(parseInt(code.replace('U+', ''), 16)),
      );
    return flag;
  };
  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.title}>Select</Text>
      <FlatList
        renderItem={({item}) => {
          return (
            <Bitext
              leftText={unicodeToSymbol(item.flagUnicode)}
              rightText={item.name}
              leftStyle={{fontSize: Platform.OS === 'android' ? 30 : 35}}
              rightStyle={{color: 'black'}}
            />
          );
        }}
        data={languages}
      />
    </View>
  );
};

export default Select;
