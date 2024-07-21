import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';
import {
    RootStackNavigationPropsAuth,
    AuthStackParamList, 
} from '../types';
import {
    Splash
} from '../../pages';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = ({
    navigation, route
}: RootStackNavigationPropsAuth) => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Login"
                component={Splash}
                options={{
                    headerShown: false
                }}
                initialParams={route.params}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigation;
