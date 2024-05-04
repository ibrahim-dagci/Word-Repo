import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationPropsProfile} from '../../navigation/types';
import {Button} from '../../components';
import {AppContext} from '../../context';
import {EarthIcon} from '../../assets/svg';

const Profile = ({route, navigation}: AppStackNavigationPropsProfile) => {
  const {values} = useContext(AppContext);
  const {theme} = values;
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
  }, []);

  return (
    <View style={stylesheet.container}>
      <Text>Profile</Text>
    </View>
  );
};
export default Profile;
