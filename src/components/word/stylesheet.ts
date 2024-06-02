import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
  },
  cloud: {
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  text: {
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 0,
    zIndex: 1,
  },
});
