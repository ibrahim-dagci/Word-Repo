import React, {useState} from 'react';
import stylesheet from './stylesheet';
import {View} from 'react-native';
import {Button, Input} from '../../components';
import {pageType} from './types';

interface ForgotProps {
  processTypeControl: [pageType, React.Dispatch<pageType>];
}

const Forgot = ({processTypeControl}: ForgotProps) => {
  const [pageType, setPageType] = processTypeControl;
  const [email, setEmail] = useState<string>('');

  return (
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
            setPageType('signin');
          }}
        />
      </View>
    </View>
  );
};

export default Forgot;
