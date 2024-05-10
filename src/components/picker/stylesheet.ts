import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: Platform.OS === 'android' ? 5 : 5,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
});
