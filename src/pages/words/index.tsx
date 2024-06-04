import {Button, ModalComponent, Switcher, Word} from '../../components';
import {TabStackNavigationPropsLanguage} from '../../navigation/types';
import React, {useContext, useEffect, useState} from 'react';
import {EarthIcon, PenIcon} from '../../assets/svg';
import {AddWordCard, ShowWordCard} from './cards';
import {FlatList, View} from 'react-native';
import {AppContext} from '../../context';
import stylesheet from './stylesheet';

const Words = ({route, navigation}: TabStackNavigationPropsLanguage) => {
  const {values, dispatch} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;
  const [validSwitchState, setValidSwitchState] = useState<boolean>(false);
  const [wordModalVisibility, setWordModalVisibility] =
    useState<boolean>(false);
  const [addWordModalVisibility, setAddWordModalVisibility] =
    useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          variant="custom"
          customContent={<EarthIcon size={25} />}
          onPress={() => navigation.goBack()}
          style={{marginLeft: 15}}
        />
      ),
      headerRight: () => (
        <Button
          variant="custom"
          customContent={<PenIcon size={25} />}
          onPress={() => {
            setAddWordModalVisibility(true);
          }}
          style={{marginRight: 15}}
        />
      ),
    });
  }, []);

  return (
    <View
      style={[stylesheet.container, {backgroundColor: colors.pageBackground}]}
    >
      <FlatList
        ListHeaderComponent={
          <Switcher
            switchStateArray={[validSwitchState, setValidSwitchState]}
          />
        }
        renderItem={({item}) => {
          return (
            <Word
              text={item}
              onPress={() => {
                setWordModalVisibility(true);
              }}
            />
          );
        }}
        data={['word', 'of']}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={2}
      />
      <ModalComponent
        visibilityControl={[wordModalVisibility, setWordModalVisibility]}
        animationType="fade"
        variant="card"
      >
        <ShowWordCard />
      </ModalComponent>
      <ModalComponent
        visibilityControl={[addWordModalVisibility, setAddWordModalVisibility]}
        animationType="fade"
        variant="card"
      >
        <AddWordCard />
      </ModalComponent>
    </View>
  );
};

export default Words;
