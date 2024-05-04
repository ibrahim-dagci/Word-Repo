import {Platform} from 'react-native';

export const SERVRER_ADRESS =
  Platform.OS === 'android' ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000';
