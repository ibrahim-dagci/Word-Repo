import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Platform.OS === 'android' ? 5 : 5,
  },
});
