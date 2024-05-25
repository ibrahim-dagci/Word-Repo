import React, {useContext, useEffect, useState} from 'react';
import stylesheet from './stylesheet';
import {Keyboard, ScrollView, View} from 'react-native';
import {Button, Input, PickerInput} from '../../components';
import {LanguageService, UserService} from '../../service/webservice';
import {pageType} from './types';
import {AppContext} from '../../context';
import Toast from 'react-native-simple-toast';
import storage from '../../storage';
import {ModalContext} from '../../components/modal/context';

interface SignUpProps {
  processTypeControl: [pageType, React.Dispatch<pageType>];
}

const SignUp = ({processTypeControl}: SignUpProps) => {
  const {values, dispatch} = useContext(AppContext);
  const {modalVisibilityControl} = useContext(ModalContext);
  const [modalVisible, setModalVisible] = modalVisibilityControl || [];
  const [pageType, setPageType] = processTypeControl;
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('tr');
  const [pickerRawData, setPickerRawData] = useState<any[]>([]);

  useEffect(() => {
    fetchAndSaveLanguages();
    const languages = storage.getString('languages');
    const languagesObject = languages ? JSON.parse(languages) : undefined;
    languagesObject ? setPickerRawData(languagesObject) : setPickerRawData([]);
  }, []);

  const findLanguageSymbol = () => {
    //Converts the flag unicode of the selected language item to emoji
    const selectedItem = pickerRawData.find(
      item => item.symbol === selectedLanguage,
    );
    const flag = selectedItem?.flagUnicode
      .split(' ')
      .map((code: string) =>
        String.fromCodePoint(parseInt(code.replace('U+', ''), 16)),
      );
    return flag;
  };

  const signUpOnclick = () => {
    new UserService()
      .signUp(userName, password, email, selectedLanguage)
      .then(() => {
        setPageType('signin');
        Toast.show('Sign up succesfull! Please Sign In', Toast.LONG);
      })
      .catch((e: Error) => {
        Toast.show(
          `Registration attempt failed! Errorr: ${e.message}!`,
          Toast.LONG,
        );
      });
  };

  const fetchAndSaveLanguages = async () => {
    new LanguageService()
      .getAllLanguages()
      .then(res => {
        storage.set('languages', JSON.stringify(res));
      })
      .catch(e => {
        // Sign Up cannot be done if the languages have not been registered before and are not registered now.
        const temp = storage.getString('languages');
        if (!temp) {
          Toast.show(
            'Unable to contact server! Check your connection or try again later',
            Toast.LONG,
          );
          setModalVisible?.(!modalVisible);
        }
      });
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
            data={pickerRawData.map(item => {
              return {label: item.name, value: item.symbol};
            })}
            selectControlStateArray={[selectedLanguage, setSelectedLanguage]}
            symbol={findLanguageSymbol()}
            title="Primary Language"
          />
        </ScrollView>
      </View>
      <View style={stylesheet.mainButtonContainer}>
        <Button title="Sign Up" variant="default" onPress={signUpOnclick} />
        <Button
          title="Sign In"
          variant="ghost"
          onPress={() => {
            setPageType('signin');
          }}
        />
      </View>
    </View>
  );
};

export default SignUp;
