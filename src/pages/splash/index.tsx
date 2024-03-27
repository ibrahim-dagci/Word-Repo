import stylesheet from './stylesheet';
import {useContext, useEffect, useRef, useState} from 'react';
import {AppIcon} from '../../assets/svg';
import {AppContext} from '../../context';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackNavigationProps} from '../../navigation/types';
import {Animated, Dimensions, Modal, Platform, Pressable} from 'react-native';
import {Button, ModalComponent} from '../../components';
import {Auth} from '../index';
import {pageType} from '../auth/types';

const Login = ({navigation}: RootStackNavigationProps) => {
  const {theme} = useContext(AppContext);
  const {colors} = theme;
  const {height} = Dimensions.get('window');

  const [modalVisible, setModalVisible] = useState(false);
  const [authType, setAuthType] = useState<pageType>('signin');

  const translateAnimY = useRef(new Animated.Value(0)).current;
  const fadeOutAnim = useRef(new Animated.Value(0)).current;

  const translateY = () => {
    Animated.timing(translateAnimY, {
      toValue: -(height * 4) / 7 / 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const translateBack = () => {
    Animated.timing(translateAnimY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeOutAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const modalVisibleOnPress = (pageType: pageType) => {
    setAuthType(pageType);
    translateY();
    setModalVisible(true);
  };
  const modalHideOnPress = () => {
    setModalVisible(false);
  };

  const noUser = () => {
    translateY();
    fadeOut();
  };

  useEffect(() => {
    setTimeout(function () {
      noUser();
    }, 3000);
  });

  return (
    <LinearGradient
      style={stylesheet.linearGradient}
      colors={theme.colors.gradient}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
    >
      <SafeAreaView style={stylesheet.container}>
        <Animated.View
          style={{
            transform: [{translateY: translateAnimY}],
          }}
        >
          <AppIcon size={(height * 3) / 7} />
        </Animated.View>
        <Animated.View
          style={{
            opacity: fadeOutAnim,
            position: 'absolute',
            width: '100%',
            padding: 10,
            bottom: 70,
            gap: 15,
          }}
        >
          <Button
            title="Sign In"
            onPress={() => {
              modalVisibleOnPress('signin');
            }}
            style={{backgroundColor: colors.defaultButton}}
            textStyle={{color: colors.defaultButtonText}}
            variant="default"
          />
          <Button
            title="Sign Up"
            onPress={() => {
              modalVisibleOnPress('signup');
            }}
            style={{backgroundColor: colors.defaultButton}}
            textStyle={{color: colors.defaultButtonText}}
            variant="default"
          />
        </Animated.View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Pressable
            style={stylesheet.modalContainer}
            onPress={modalHideOnPress}
          />
          <ModalComponent color={theme.colors.modal}>
            <Auth processType={authType} />
          </ModalComponent>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Login;
