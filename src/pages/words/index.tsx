import React, {useContext, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import stylesheet from './stylesheet';
import {TabStackNavigationPropsLanguage} from '../../navigation/types';
import {Button, Switcher, Word} from '../../components';
import {EarthIcon, PenIcon} from '../../assets/svg';
import {AppContext} from '../../context';

const Words = ({route, navigation}: TabStackNavigationPropsLanguage) => {
  const {values, dispatch} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;
  const [validSwitchState, setValidSwitchState] = useState<boolean>(false);
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
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
            setModalVisibility(!modalVisibility);
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
          return <Word text={item} />;
        }}
        data={[
          'word',
          'of',
          'warcraft',
          'legend',
          'never',
          'scrum',
          'hello',
          'test',
          'green',
          'world',
          'earth',
        ]}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

export default Words;
