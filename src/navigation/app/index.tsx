import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList, RootStackNavigationPropsApp} from '../types';
import {Home, Profile} from '../../pages';
import {AppContext} from '../../context';
import {useContext} from 'react';
import BottomTabs from '../bottom';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = ({route}: RootStackNavigationPropsApp) => {
  const {values} = useContext(AppContext);
  const {theme} = values;
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        initialParams={{user: route.params.user}}
        options={{
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.colors.header},
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
          headerStyle: {backgroundColor: theme.colors.header},
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
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.colors.header},
          headerShown: false,
        }}
        component={BottomTabs}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
