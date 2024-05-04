import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  App: {userId: string};
};
export type AuthStackParamList = {
  Login: undefined;
};
export type AppStackParamList = {
  Home: {message: string};
  Profile: undefined;
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
