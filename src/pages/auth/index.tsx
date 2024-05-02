import {useContext, useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import stylesheet from './stylesheet';
import {pageType} from './types';
import {Button, Input} from '../../components';
import {AppContext} from '../../context';
import {RootStackNavigationProps} from '../../navigation/types';
import {ModalContext} from '../../components/modal/context';
import Websercice from '../../service/Webservice';

const Auth = ({
  processType,
  navigation,
}: {
  processType: pageType;
  navigation?: RootStackNavigationProps['navigation'];
}) => {
  const {theme} = useContext(AppContext);
  const {colors} = theme;

  const {modalVisibilityControl} = useContext(ModalContext);
  const [modalVisible, setModalVisible] = modalVisibilityControl || [];

  const [pageType, setPageType] = useState<pageType>(processType);
  const [signin, setSignin] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const [sigup, setSignup] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
            <Input
              onChangeText={value => setUserName(value)}
              keyboard="email-address"
              placeholder="E mail"
              value={userName}
              returnKeyType="done"
              onSubmitEnding={() => Keyboard.dismiss()}
            />
            <Input
              placeholder="Password"
              isSecure={true}
              onChangeText={value => setPassword(value)}
              value={password}
              returnKeyType="done"
              onSubmitEnding={() => Keyboard.dismiss()}
            />
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
              onPress={async () => {
                new Websercice(userName, password)
                  .signIn()
                  .then((currenUser: any) => {
                    navigation?.navigate('App', {userId: currenUser.user._id});
                    setModalVisible?.(false);
                  })
                  .catch((e: Error) => {
                    console.log('err: ' + e.message);
                  });
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
