import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: Platform.OS === 'android' ? 5 : 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    height: 48,
    margin: 5,
    gap: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#dadada',
    fontSize: 18,
  },
});
