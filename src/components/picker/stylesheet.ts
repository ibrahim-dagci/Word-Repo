import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: Platform.OS === 'android' ? 30 : 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
  },

  placeholder: {
    position: 'absolute',
    textAlign: 'center',
    color: 'gray',
    left: 10,
    top: 10,
  },
});
