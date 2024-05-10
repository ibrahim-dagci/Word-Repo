import React, {useContext, useEffect, useState} from 'react';
import {Text, Platform, FlatList, View} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationPropsHome} from '../../navigation/types';
import {Button, LanguageCard, ModalComponent} from '../../components';
import {AppContext} from '../../context';
import {PlusIcon, ProfileIcon} from '../../assets/svg';

const Home = ({route, navigation}: AppStackNavigationPropsHome) => {
  const {values} = useContext(AppContext);
  const {theme} = values;

  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          variant="custom"
          onPress={() => navigation.navigate('Profile')}
          customContent={<ProfileIcon size={25} />}
        />
      ),
    });
  }, []);

  return (
    <View style={stylesheet.container}>
      <FlatList
        renderItem={({item}) => {
          return (
            <LanguageCard
              text={item}
              imageSource={require('../../assets/img/test.png')}
            />
          );
        }}
        data={['1', '2', '3', '4']}
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
        color={theme.colors.modal}
      ></ModalComponent>
    </View>
  );
};
export default Home;
