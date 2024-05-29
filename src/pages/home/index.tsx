import React, {useContext, useEffect, useState} from 'react';
import {Platform, FlatList, View} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationPropsHome} from '../../navigation/types';
import {Button, LanguageCard, ModalComponent} from '../../components';
import {AppContext} from '../../context';
import {PlusIcon, ProfileIcon} from '../../assets/svg';
import {Select} from '../../pages';
import {UserLanguageService} from '../../service/webservice';
import storage from '../../storage';
import Toast from 'react-native-simple-toast';
import {SERVRER_ADRESS} from '../../constants';

const Home = ({route, navigation}: AppStackNavigationPropsHome) => {
  const {values} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;

  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [allLanguages, setAllLanguages] = useState<any[]>([]);
  const [listData, setListData] = useState<any[]>([]);

  useEffect(() => {
    const languagesString = storage.getString('languages');
    const languagesObject = languagesString ? JSON.parse(languagesString) : [];
    setAllLanguages(languagesObject);
  }, []);

  useEffect(() => {
    filterListData(allLanguages);
  }, [allLanguages, modalVisibility]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          variant="custom"
          onPress={() =>
            navigation.navigate('Profile', {user: route.params.user.user})
          }
          customContent={<ProfileIcon size={25} />}
        />
      ),
    });
  }, []);

  const filterListData = (allLanguages: any[]) => {
    new UserLanguageService()
      .getUserLanguages(route.params.user.token)
      .then(res => {
        const filteredLanguages = allLanguages.filter(item => {
          return res.find(
            (innerItem: any) => innerItem.languageSymbol === item.symbol,
          );
        });
        setListData(filteredLanguages);
      })
      .catch(e => {
        Toast.show(`${e.name}: ${e.message}`, Toast.LONG);
      });
  };

  return (
    <View
      style={[stylesheet.container, {backgroundColor: colors.pageBackground}]}
    >
      <FlatList
        renderItem={({item}) => {
          return (
            <LanguageCard
              text={item.name}
              imageSource={{
                uri: `${SERVRER_ADRESS}/${item.imgUrl}`,
              }}
              onPress={() => {
                navigation.navigate('Language', {user: route.params.user});
              }}
            />
          );
        }}
        data={listData}
        keyExtractor={item => item.name}
      />
      <Button
        onPress={() => {
          setModalVisibility(!modalVisibility);
        }}
        variant="FAB"
        customContent={<PlusIcon size={23} />}
        style={{
          position: 'absolute',
          bottom: Platform.OS === 'android' ? 40 : 50,
          right: Platform.OS === 'android' ? 40 : 40,
        }}
      />
      <ModalComponent
        visibilityControl={[modalVisibility, setModalVisibility]}
        color={colors.modal}
      >
        <Select />
      </ModalComponent>
    </View>
  );
};
export default Home;
