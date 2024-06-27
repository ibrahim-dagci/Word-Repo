import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppContext} from '../../context';
import {AppStackNavigationPropsLanguage, TabStackParamList} from '../types';
import {Chat, Words} from '../../pages';
import {useContext} from 'react';
import {ChatIcon, CloudIcon} from '../../assets/svg';

const LanguageStack = createBottomTabNavigator<TabStackParamList>();

const BottomTabs = ({route, navigation}: AppStackNavigationPropsLanguage) => {
  const {values} = useContext(AppContext);
  const {theme} = values;
  return (
    <LanguageStack.Navigator>
      <LanguageStack.Screen
        name="Words"
        component={Words}
        initialParams={{
          user: route.params.user,
          language: route.params.language,
        }}
        options={{
          headerStyle: {backgroundColor: theme.colors.header},
          headerTitleAlign: 'center',
          headerTintColor: '#dddddd',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarIcon: ({color, size}) => (
            <CloudIcon size={size} color={color} />
          ),
        }}
      />
      <LanguageStack.Screen
        name="Chat"
        component={Chat}
        initialParams={{
          user: route.params.user,
          language: route.params.language,
        }}
        options={{
          headerStyle: {backgroundColor: theme.colors.header},
          headerTitleAlign: 'center',
          headerTintColor: '#dddddd',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarIcon: ({color, size}) => <ChatIcon size={size} color={color} />,
        }}
      />
    </LanguageStack.Navigator>
  );
};

export default BottomTabs;
