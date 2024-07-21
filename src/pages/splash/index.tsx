import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';
import stylesheet from './stylesheet';
import storage from '../../storage';
import {
    useContext, 
    useEffect, 
    useState,
    useRef, 
} from 'react';
import {
    Logo
} from '../../assets/svg';
import {
    AppContext
} from '../../context';
import {
    SafeAreaView
} from 'react-native-safe-area-context';
import {
    RootStackNavigationProps
} from '../../navigation/types';
import {
    Dimensions,
    Animated, 
} from 'react-native';
import {
    ModalComponent,
    Button, 
} from '../../components';
import {
    Auth
} from '../index';
import {
    pageType
} from '../auth/types';
import {
    UserService
} from '../../service/webservice';

const Login = ({
    navigation
}: RootStackNavigationProps) => {
    const {
        dispatch,
        values, 
    } = useContext(AppContext);
    const {
        theme
    } = values;
    const {
        colors
    } = theme;
    const {
        height
    } = Dimensions.get('window');

    const [modalVisible, setModalVisible] = useState(false);
    const [authType, setAuthType] = useState<pageType>('signin');

    const translateAnimY = useRef(new Animated.Value(0)).current;
    const fadeOutAnim = useRef(new Animated.Value(0)).current;

    const translateY = () => {
        Animated.timing(translateAnimY, {
            toValue: -(height * 4) / 7 / 1.7,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };
    const translateBack = () => {
        Animated.timing(translateAnimY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeOutAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };
    const modalVisibleOnPress = (pageType: pageType) => {
        setAuthType(pageType);
        setModalVisible(true);
    };

    const noUser = () => {
        translateY();
        fadeOut();
    };

    const goHome = (user: any) => {
        navigation.navigate('App', {
            user: user
        });
        setTimeout(() => {
            dispatch({
                type: 'UPDATE_IS_AUTH', payload: false
            });
        }, 0);
    };

    const userIsAuth = () => {
        const userString = storage.getString('user');
        const userObject = userString ? JSON.parse(userString) : undefined;
        if (userObject) {
            new UserService()
                .isAuthor(userObject.token)
                .then(res => {
                    goHome({
                        token: userObject.token, user: res
                    });
                })
                .catch((e: Error) => {
                    Toast.show(
                        `Your session has expired please log in again ${e.message}`,
                        Toast.LONG,
                    );
                    storage.set('user', '');
                    noUser();
                });
        } else noUser();
    };

    useEffect(() => {
        userIsAuth();
    }, []);

    return (
        <LinearGradient
            style={stylesheet.linearGradient}
            colors={theme.colors.gradient}
            start={{
                x: 1, y: 0
            }}
            end={{
                x: 0, y: 1
            }}
        >
            <SafeAreaView style={stylesheet.container}>
                <Animated.View
                    style={{
                        transform: [{
                            translateY: translateAnimY
                        }],
                    }}
                >
                    <Logo size={(height * 3) / 7} />
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
                        style={{
                            backgroundColor: colors.defaultButton
                        }}
                        textStyle={{
                            color: colors.defaultButtonText
                        }}
                        variant="default"
                    />
                    <Button
                        title="Sign Up"
                        onPress={() => {
                            modalVisibleOnPress('signup');
                        }}
                        style={{
                            backgroundColor: colors.defaultButton
                        }}
                        textStyle={{
                            color: colors.defaultButtonText
                        }}
                        variant="default"
                    />
                </Animated.View>
                <ModalComponent
                    variant="bottom"
                    visibilityControl={[modalVisible, setModalVisible]}
                    color={colors.modal}
                >
                    <Auth processType={authType} navigation={navigation} />
                </ModalComponent>
            </SafeAreaView>
        </LinearGradient>
    );
};
export default Login;
