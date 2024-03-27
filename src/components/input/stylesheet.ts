import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    height: 48,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: Platform.OS === 'android' ? 5 : 5,
  },
  input: {
    flex: 1,
    fontWeight: 'bold',
  },
});
