import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  App: {user: any};
};
export type AuthStackParamList = {
  Login: undefined;
};
export type AppStackParamList = {
  Home: {user: any};
  Profile: {user: any};
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
export type AuthStackNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login'
>;

export type AppStackNavigationPropsHome = NativeStackScreenProps<
  AppStackParamList,
  'Home'
>;
export type AppStackNavigationPropsProfile = NativeStackScreenProps<
  AppStackParamList,
  'Profile'
>;
