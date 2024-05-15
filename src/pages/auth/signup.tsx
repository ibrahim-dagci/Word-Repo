import React, {useContext, useState} from 'react';
import stylesheet from './stylesheet';
import {Keyboard, ScrollView, View} from 'react-native';
import {Button, Input, PickerInput} from '../../components';
import {UserService} from '../../service/webservice';
import {RootStackNavigationProps} from '../../navigation/types';
import {pageType} from './types';
import {AppContext} from '../../context';
import Toast from 'react-native-simple-toast';

interface SignUpProps {
  processTypeControl: [pageType, React.Dispatch<pageType>];
  navigation: RootStackNavigationProps['navigation'];
}

const SignUp = ({processTypeControl, navigation}: SignUpProps) => {
  const {values, dispatch} = useContext(AppContext);
  const [pageType, setPageType] = processTypeControl;
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('tr');

  const signUpOnclick = () => {
    setPageType('signin');
    Toast.show('Sign up succesfull! Please Sign In', Toast.LONG);
  };
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.signup}>
        <ScrollView>
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
            isSecure={true}
            onChangeText={value => setPassword(value)}
            value={password}
            returnKeyType="done"
            onSubmitEnding={() => Keyboard.dismiss()}
          />
          <Input
            placeholder="Password (again)"
            isSecure={true}
            onChangeText={value => setPasswordAgain(value)}
            value={passwordAgain}
            returnKeyType="done"
            onSubmitEnding={() => Keyboard.dismiss()}
          />
          <PickerInput
            data={[{label: 'Turkish', value: 'tr'}]}
            selectControlStateArray={[selectedLanguage, setSelectedLanguage]}
          />
        </ScrollView>
      </View>
      <View style={stylesheet.mainButtonContainer}>
        <Button
          title="Sign Up"
          variant="default"
          onPress={() => {
            new UserService()
              .signUp(userName, password, email, selectedLanguage)
              .then(res => {
                signUpOnclick();
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
  );
};

export default SignUp;
