import React, {useContext, useState} from 'react';
import stylesheet from './stylesheet';
import {Keyboard, View} from 'react-native';
import {Button, Input} from '../../components';
import {UserService} from '../../service/webservice';
import {RootStackNavigationProps} from '../../navigation/types';
import {pageType} from './types';
import {AppContext} from '../../context';
import {ModalContext} from '../../components/modal/context';
import Toast from 'react-native-simple-toast';
import storage from '../../storage';

interface SignInProps {
  processTypeControl: [pageType, React.Dispatch<pageType>];
  navigation: RootStackNavigationProps['navigation'];
}

const SignIn = ({processTypeControl, navigation}: SignInProps) => {
  const {values, dispatch} = useContext(AppContext);
  const {modalVisibilityControl} = useContext(ModalContext);
  const [pageType, setPageType] = processTypeControl;
  const [modalVisible, setModalVisible] = modalVisibilityControl || [];
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const signInOnclick = (currenUser: any) => {
    navigation?.navigate('App', {
      userId: currenUser.user._id,
    });
    setTimeout(() => {
      dispatch({type: 'UPDATE_IS_AUTH', payload: false});
    }, 0);
    setModalVisible?.(false);
    Toast.show(`Log in successful! Welcome`, Toast.LONG);
    storage.set('user', JSON.stringify(currenUser));
  };
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.signin}>
        <Input
          onChangeText={value => setEmail(value)}
          keyboard="email-address"
          placeholder="E mail"
          value={email}
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
            new UserService()
              .signIn(email, password)
              .then((currenUser: any) => signInOnclick(currenUser))
              .catch((e: Error) => {
                Toast.show(`Failed to log in! Error: ${e.message}`, Toast.LONG);
              });
          }}
        />
        <Button
          title="Sign Up"
          variant="ghost"
          onPress={() => {
            setPageType('signup');
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;
