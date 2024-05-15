import {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import stylesheet from './stylesheet';
import {pageType} from './types';
import {AppContext} from '../../context';
import {RootStackNavigationProps} from '../../navigation/types';
import SignIn from './signin';
import SignUp from './signup';
import Forgot from './forgot';

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
        <SignIn
          processTypeControl={[pageType, setPageType]}
          navigation={navigation}
        />
      )}
      {sigup && (
        <SignUp
          processTypeControl={[pageType, setPageType]}
          navigation={navigation}
        />
      )}
      {forgot && <Forgot processTypeControl={[pageType, setPageType]} />}
    </View>
  );
};

export default Auth;
