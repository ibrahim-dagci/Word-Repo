import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chat, Words} from '../../pages';
import {TabStackParamList} from '../types';

const LanguageStack = createBottomTabNavigator<TabStackParamList>();

const BottomTabs = () => {
  return (
    <LanguageStack.Navigator>
      <LanguageStack.Screen
        name="Words"
        component={Words}
        options={{headerShown: false}}
      />
      <LanguageStack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </LanguageStack.Navigator>
  );
};

export default BottomTabs;
