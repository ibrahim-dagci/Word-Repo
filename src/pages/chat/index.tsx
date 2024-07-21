import React from 'react';
import stylesheet from './stylesheet';
import {
    View
} from 'react-native';
import {
    TabStackNavigationPropsChat
} from '../../navigation/types';

const Chat = ({
    navigation, route
}: TabStackNavigationPropsChat) => {
    return <View style={stylesheet.container}></View>;
};

export default Chat;
