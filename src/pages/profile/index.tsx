import React, {useContext, useEffect, useState} from 'react';
import {Platform, View} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationPropsProfile} from '../../navigation/types';
import {Bitext, Button} from '../../components';
import {AppContext} from '../../context';
import {EarthIcon, ProfileIcon} from '../../assets/svg';
import storage from '../../storage';

const Profile = ({route, navigation}: AppStackNavigationPropsProfile) => {
  const {values} = useContext(AppContext);
  const {theme} = values;
  const {colors} = theme;
  const [languages, setLanguages] = useState<any[]>([]);
  const [userLanguage, setUserLanguage] = useState<any>({});
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          variant="custom"
          customContent={<EarthIcon size={25} />}
          onPress={() => navigation.goBack()}
        />
      ),
    });
    getLanguages();
  }, []);

  useEffect(() => {
    findLanguageItem();
  }, [languages]);

  const getLanguages = () => {
    const languages = storage.getString('languages');
    const languagesObject = languages ? JSON.parse(languages) : undefined;
    languagesObject ? setLanguages(languagesObject) : undefined;
  };
  const findLanguageItem = () => {
    //Converts the flag unicode of the selected language item to emoji
    const selectedItem = languages.find(
      item => item.symbol === route.params.user.primaryLanguage,
    );
    selectedItem ? setUserLanguage(selectedItem) : {};
  };

  const unicodeToSymbol = () => {
    //Converts the flag unicode of the selected language item to emoji
    const flag = userLanguage.flagUnicode
      ? userLanguage.flagUnicode
          .split(' ')
          .map((code: string) =>
            String.fromCodePoint(parseInt(code.replace('U+', ''), 16)),
          )
      : '';
    return flag;
  };
  return (
    <View
      style={{backgroundColor: colors.pageBackground, ...stylesheet.container}}
    >
      <ProfileIcon size={100} />
      <View style={stylesheet.informationContainer}>
        <Bitext leftText="User Name:" rightText={route.params.user.userName} />
        <Bitext leftText="E mail:" rightText={route.params.user.email} />
        <Bitext
          leftText={unicodeToSymbol()}
          rightText={`Primary Language: ${
            userLanguage.name ? userLanguage.name : ''
          }`}
          leftStyle={{fontSize: Platform.OS === 'android' ? 30 : 35}}
          containerStyle={{padding: 5}}
        />
      </View>
      <View style={stylesheet.buttonContainer}>
        <Button title="Save" onPress={() => {}}></Button>
        <Button variant="ghost" title="About Us" onPress={() => {}}></Button>
      </View>
    </View>
  );
};
export default Profile;
