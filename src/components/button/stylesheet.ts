import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  containerDefault: {
    margin: 5,
    height: 48,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerGhost: {
    margin: 0,
    padding: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
