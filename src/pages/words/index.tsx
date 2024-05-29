import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import stylesheet from './stylesheet';
import {TabStackNavigationPropsLanguage} from '../../navigation/types';
import {Button} from '../../components';
import {EarthIcon, PenIcon} from '../../assets/svg';
import {AppContext} from '../../context';

const Words = ({route, navigation}: TabStackNavigationPropsLanguage) => {
  const {values, dispatch} = useContext(AppContext);
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
          onPress={() => {}}
          style={{marginRight: 15}}
        />
      ),
    });
  }, []);

  return <View style={stylesheet.container}></View>;
};

export default Words;
