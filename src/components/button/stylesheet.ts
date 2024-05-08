import {StyleSheet, Platform} from 'react-native';
import Navigation from '../../navigation';

export default StyleSheet.create({
  default: {
    margin: 5,
    height: 48,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ghost: {
    margin: 0,
    padding: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  custom: {},
  titleGhost: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#53b5d5',
  },

  titleDefault: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  titleFAB: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#dddddd',
  },

  FAB: {
    backgroundColor: '#366E8F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: Platform.OS === 'android' ? 32 : 35,
    height: Platform.OS === 'android' ? 64 : 70,
    width: Platform.OS === 'android' ? 64 : 70,
  },
});
