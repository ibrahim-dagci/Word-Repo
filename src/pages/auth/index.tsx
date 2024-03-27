import {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import stylesheet from './stylesheet';
import {pageType} from './types';
import {Button, Input} from '../../components';
import {AppContext} from '../../context';
import {RootStackNavigationProps} from '../../navigation/types';
import {ModalContext} from '../../components/modal/context';

const Auth = ({
  processType,
  navigation,
}: {
  processType: pageType;
  navigation?: RootStackNavigationProps['navigation'];
}) => {
  const {theme} = useContext(AppContext);
  const {colors} = theme;

  // Örneğin, ModalContext'ten dönen bir değer nesne şeklindeyse
  const {modalVisibilityControl} = useContext(ModalContext);
  const [modalVisible, setModalVisible] = modalVisibilityControl || [];

  const [pageType, setPageType] = useState<pageType>(processType);
  const [signin, setSignin] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const [sigup, setSignup] = useState<boolean>(false);
  useEffect(() => {
    switch (pageType) {
      case 'signin':
        setSignin(true);
        setSignup(false);
        setForgot(false);
        break;
      case 'signup':
        setSignup(true);
        setSignin(false);
        setForgot(false);
        break;
      case 'forgot':
        setForgot(true);
        setSignup(false);
        setSignin(false);
        break;
    }
  }, [pageType]);

  return (
    <View style={stylesheet.container}>
      {signin && (
        <View style={stylesheet.container}>
          <View style={stylesheet.sigin}>
            <Input placeholder="E mail" keyboard="email-address" />
            <Input placeholder="Password" isSecure={true} />
            <Button
              variant="ghost"
              title="I forgot password !"
              onPress={() => setPageType('forgot')}
              style={{position: 'absolute', bottom: 0, right: 0}}
            />
          </View>
          <View>
            <Button
              title="Sign In"
              variant="default"
              onPress={() => {
                navigation?.navigate('App', {userId: '123'});
                setModalVisible?.(false);
              }}
            />
          </View>
          <View>
            <Button
              title="Sign Up"
              variant="ghost"
              onPress={() => setPageType('signup')}
            />
          </View>
        </View>
      )}
      {sigup && (
        <View style={stylesheet.container}>
          <View style={stylesheet.signup}>
            <Input placeholder="E mail" keyboard="email-address" />
            <Input placeholder="Password" keyboard="visible-password" />
            <Input placeholder="Password (again)" keyboard="visible-password" />
          </View>
          <View>
            <Button title="Sign Up" variant="default" />
          </View>
          <View>
            <Button
              title="Sign In"
              variant="ghost"
              onPress={() => setPageType('signin')}
            />
          </View>
        </View>
      )}
      {forgot && (
        <View style={stylesheet.container}>
          <View style={stylesheet.forgot}>
            <Input placeholder="E mail" keyboard="email-address" />
          </View>
          <View>
            <Button title="Send Email" variant="default" />
          </View>
          <View>
            <Button
              title="Sign In"
              variant="ghost"
              onPress={() => setPageType('signin')}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Auth;
