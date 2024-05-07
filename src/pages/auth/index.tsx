import {useContext, useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import stylesheet from './stylesheet';
import {pageType} from './types';
import {Button, Input} from '../../components';
import {AppContext} from '../../context';
import {RootStackNavigationProps} from '../../navigation/types';
import {ModalContext} from '../../components/modal/context';
import Websercice from '../../service/Webservice';
import Toast from 'react-native-simple-toast';
import {err} from 'react-native-svg';
import storage from '../../storage';

const Auth = ({
  processType,
  navigation,
}: {
  processType: pageType;
  navigation: RootStackNavigationProps['navigation'];
}) => {
  const {values, dispatch} = useContext(AppContext);
  const {theme} = values;
  const {colors} = theme;

  const {modalVisibilityControl} = useContext(ModalContext);
  const [modalVisible, setModalVisible] = modalVisibilityControl || [];

  const [pageType, setPageType] = useState<pageType>(processType);
  const [signin, setSignin] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const [sigup, setSignup] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [primaryLanguage, setPrimaryLanguage] = useState<string>('');
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

  const signIn = (currenUser: any) => {
    navigation?.navigate('App', {
      userId: currenUser.user._id,
    });
    setTimeout(() => {
      dispatch({type: 'UPDATE_IS_AUTH', payload: false});
    }, 0);
    setModalVisible?.(false);
    Toast.show(`Logi n successful! Welcome`, Toast.LONG);
    storage.set('user', JSON.stringify(currenUser));
  };

  const signUp = () => {
    setPageType('signin');
    Toast.show('Sign up succesfull! Please Sign In', Toast.LONG);
    setUserName('');
    setPassword('');
  };

  return (
    <View style={stylesheet.container}>
      {signin && (
        <View style={stylesheet.container}>
          <View style={stylesheet.signin}>
            <Input
              onChangeText={value => setUserName(value)}
              keyboard="email-address"
              placeholder="User Name"
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
          <View style={stylesheet.mainButtonContainer}>
            <Button
              title="Sign In"
              variant="default"
              onPress={() => {
                new Websercice()
                  .signIn(userName, password)
                  .then((currenUser: any) => {
                    signIn(currenUser);
                  })
                  .catch((e: Error) => {
                    Toast.show(
                      `Failed to log in! Error: ${e.message}`,
                      Toast.LONG,
                    );
                  });
              }}
            />
            <Button
              title="Sign Up"
              variant="ghost"
              onPress={() => {
                setUserName('');
                setPassword('');
                setPageType('signup');
              }}
            />
          </View>
        </View>
      )}
      {sigup && (
        <View style={stylesheet.container}>
          <View style={stylesheet.signup}>
            <Input
              placeholder="E mail"
              keyboard="email-address"
              onChangeText={value => setEmail(value)}
              value={email}
              returnKeyType="done"
              onSubmitEnding={() => Keyboard.dismiss()}
            />
            <Input
              placeholder="User Name"
              keyboard="email-address"
              onChangeText={value => setUserName(value)}
              value={userName}
              returnKeyType="done"
              onSubmitEnding={() => Keyboard.dismiss()}
            />
            <Input
              placeholder="Password"
              keyboard="visible-password"
              onChangeText={value => setPassword(value)}
              value={password}
              returnKeyType="done"
              onSubmitEnding={() => Keyboard.dismiss()}
            />
            <Input
              placeholder="Password (again)"
              keyboard="visible-password"
              onChangeText={value => setPasswordAgain(value)}
              value={passwordAgain}
              returnKeyType="done"
              onSubmitEnding={() => Keyboard.dismiss()}
            />
            <Input
              placeholder="Primary Language"
              keyboard="email-address"
              onChangeText={value => setPrimaryLanguage(value)}
              value={primaryLanguage}
              returnKeyType="done"
              onSubmitEnding={() => Keyboard.dismiss()}
            />
          </View>
          <View style={stylesheet.mainButtonContainer}>
            <Button
              title="Sign Up"
              variant="default"
              onPress={() => {
                new Websercice()
                  .signUp(userName, password, email, primaryLanguage)
                  .then(res => {
                    signUp();
                  })
                  .catch((e: Error) => {
                    Toast.show(
                      `Registration attempt failed! Error: ${e.message}!`,
                      Toast.LONG,
                    );
                  });
              }}
            />
            <Button
              title="Sign In"
              variant="ghost"
              onPress={() => {
                setUserName('');
                setPassword('');
                setPageType('signin');
              }}
            />
          </View>
        </View>
      )}
      {forgot && (
        <View style={stylesheet.container}>
          <View style={stylesheet.forgot}>
            <Input placeholder="E mail" keyboard="email-address" />
          </View>
          <View style={stylesheet.mainButtonContainer}>
            <Button title="Send Email" variant="default" onPress={() => {}} />
            <Button
              title="Sign In"
              variant="ghost"
              onPress={() => {
                setUserName('');
                setPassword('');
                setPageType('signin');
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Auth;
