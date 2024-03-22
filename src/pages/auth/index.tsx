import {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import stylesheet from './stylesheet';
import {pageType} from './types';
import {Button} from '../../components';
import {AppContext} from '../../context';

const Auth = ({processType}: {processType: pageType}) => {
  const {theme} = useContext(AppContext);

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
        <View>
          <Button
            title="Sign In"
            style={{backgroundColor: theme.colors.defaultButton}}
            textStyle={{color: theme.colors.defaultButtonText}}
          />
        </View>
      )}
      {sigup && (
        <View>
          <Button
            title="Sign Up"
            style={{backgroundColor: theme.colors.defaultButton}}
            textStyle={{color: theme.colors.defaultButtonText}}
          />
        </View>
      )}
      {forgot && (
        <View>
          <Button
            title="Send Mail"
            style={{backgroundColor: theme.colors.defaultButton}}
            textStyle={{color: theme.colors.defaultButtonText}}
          />
        </View>
      )}
    </View>
  );
};

export default Auth;
