import React, {useContext, useEffect, useState} from 'react';
import {Platform, FlatList, View} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationPropsHome} from '../../navigation/types';
import {Button, LanguageCard, ModalComponent} from '../../components';
import {AppContext} from '../../context';
import {PlusIcon, ProfileIcon} from '../../assets/svg';
import {Select} from '../../pages';
import {UserLanguageService} from '../../service/webservice';
import Toast from 'react-native-simple-toast';
import {SERVRER_ADRESS} from '../../constants';

const Home = ({route, navigation}: AppStackNavigationPropsHome) => {
  const {values, dispatch} = useContext(AppContext);
  const {
    theme: {colors},
    loading,
  } = values;

  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [listData, setListData] = useState<any[]>([]);

  useEffect(() => {
    getListData();
  }, [modalVisibility]);

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

  const getListData = () => {
    dispatch({type: 'UPDATE_LOADING', payload: true});
    new UserLanguageService()
      .getUserLanguages(route.params.user.token)
      .then(res => {
        setListData(res);
        dispatch({type: 'UPDATE_LOADING', payload: false});
      })
      .catch(e => {
        Toast.show(`${e.name}: ${e.message}`, Toast.LONG);
        dispatch({type: 'UPDATE_LOADING', payload: false});
      });
  };
  const {user} = route.params;

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
                navigation.navigate('Language', {
                  user,
                  language: item.symbol,
                });
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
        variant="bottom"
        visibilityControl={[modalVisibility, setModalVisibility]}
        color={colors.modal}
      >
        <Select />
      </ModalComponent>
    </View>
  );
};
export default Home;
