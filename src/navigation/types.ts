import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  App: {user: any};
};

export type RootStackNavigationProps =
  NativeStackScreenProps<RootStackParamList>;

export type RootStackNavigationPropsApp = NativeStackScreenProps<
  RootStackParamList,
  'App'
>;
export type RootStackNavigationPropsAuth = NativeStackScreenProps<
  RootStackParamList,
  'Auth'
>;
//--------------------------------------------------------------------------------
export type AuthStackParamList = {
  Login: undefined;
};
export type AuthStackNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login'
>;

//---------------------------------------------------------------------------------
export type AppStackParamList = {
  Home: {user: any};
  Profile: {user: any};
  Language: {user: any; language: string};
};

export type AppStackNavigationPropsHome = NativeStackScreenProps<
  AppStackParamList,
  'Home'
>;
export type AppStackNavigationPropsProfile = NativeStackScreenProps<
  AppStackParamList,
  'Profile'
>;

export type AppStackNavigationPropsLanguage = NativeStackScreenProps<
  AppStackParamList,
  'Language'
>;

//------------------------------------------------------------
export type TabStackParamList = {
  Words: {user: any; language: string};
  Chat: {user: any; language: string};
};

export type TabStackNavigationPropsLanguage = NativeStackScreenProps<
  TabStackParamList,
  'Words'
>;

export type TabStackNavigationPropsChat = NativeStackScreenProps<
  TabStackParamList,
  'Chat'
>;
