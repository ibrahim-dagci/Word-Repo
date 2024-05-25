import React, {useContext, useEffect, useState} from 'react';
import {Text, Platform, FlatList, View} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationPropsHome} from '../../navigation/types';
import {Button, LanguageCard, ModalComponent} from '../../components';
import {AppContext} from '../../context';
import {PlusIcon, ProfileIcon} from '../../assets/svg';
import {Select} from '../../pages';

const Home = ({route, navigation}: AppStackNavigationPropsHome) => {
  const {values} = useContext(AppContext);
  const {theme} = values;

  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          variant="custom"
          onPress={() =>
            navigation.navigate('Profile', {user: route.params.user})
          }
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
              text={item.name}
              imageSource={item.source}
              onPress={() => {
                navigation.navigate('Language', {user: route.params.user});
              }}
            />
          );
        }}
        data={[
          {name: 'Turkish', source: require('../../assets/img/testTr.png')},
          {name: 'Arabic', source: require('../../assets/img/test.png')},
          {name: 'German', source: require('../../assets/img/testDe.png')},
          {name: 'English', source: require('../../assets/img/testEn.png')},
        ]}
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
        color={theme.colors.modal}
      >
        <Select />
      </ModalComponent>
    </View>
  );
};
export default Home;
