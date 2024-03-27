import {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import stylesheet from './stylesheet';
import {pageType} from './types';
import {Button, Input} from '../../components';
import {AppContext} from '../../context';

const Auth = ({processType}: {processType: pageType}) => {
  const {theme} = useContext(AppContext);
  const {colors} = theme;

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
            <Input placeholder="E mail" />
            <Input placeholder="Password" />
            <Button
              variant="ghost"
              title="I forgot password !"
              onPress={() => setPageType('forgot')}
              style={{position: 'absolute', bottom: 0, right: 0}}
            />
          </View>
          <View>
            <Button title="Sign In" variant="default" />
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
          <View>
            <Input placeholder="E mail" />
            <Input placeholder="Password" />
            <Input placeholder="Password (again)" />
            <Input placeholder="Primary Language" />
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
          <View>
            <Input placeholder="E mail" />
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
