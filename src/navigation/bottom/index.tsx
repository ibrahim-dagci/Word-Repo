import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppContext} from '../../context';
import {TabStackParamList} from '../types';
import {Chat, Words} from '../../pages';
import {useContext} from 'react';

const LanguageStack = createBottomTabNavigator<TabStackParamList>();

const BottomTabs = () => {
  const {values} = useContext(AppContext);
  const {theme} = values;
  return (
    <LanguageStack.Navigator>
      <LanguageStack.Screen
        name="Words"
        component={Words}
        options={{
          headerStyle: {backgroundColor: theme.colors.header},
          headerTitleAlign: 'center',
          headerTintColor: '#dddddd',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <LanguageStack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerStyle: {backgroundColor: theme.colors.header},
          headerTitleAlign: 'center',
          headerTintColor: '#dddddd',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
    </LanguageStack.Navigator>
  );
};

export default BottomTabs;
