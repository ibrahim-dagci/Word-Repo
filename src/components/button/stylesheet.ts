import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: Platform.OS === 'android' ? 9 : 13,
    margin: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
