import BottomTabs from '../bottom';
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';
import {
    RootStackNavigationPropsApp,
    AppStackParamList, 
} from '../types';
import {
    Profile,
    Home, 
} from '../../pages';
import {
    AppContext
} from '../../context';
import {
    useContext
} from 'react';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = ({
    route
}: RootStackNavigationPropsApp) => {
    const {
        values
    } = useContext(AppContext);
    const {
        theme
    } = values;
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen
                name="Home"
                component={Home}
                initialParams={{
                    user: route.params.user
                }}
                options={{
                    headerBackVisible: false,
                    headerStyle: {
                        backgroundColor: theme.colors.header
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#dddddd',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                }}
            />
            <AppStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerBackVisible: false,
                    headerStyle: {
                        backgroundColor: theme.colors.header
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#dddddd',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                }}
            />
            <AppStack.Screen
                name="Language"
                options={{
                    headerShown: false,
                }}
                component={BottomTabs}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
