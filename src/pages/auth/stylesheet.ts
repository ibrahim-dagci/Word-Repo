import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  signin: {
    paddingTop: 10,
    paddingBottom: 50,
  },
  signup: {
    paddingTop: 10,
    paddingBottom: 50,
    height: Dimensions.get('window').height / 2.1,
  },
  forgot: {
    paddingTop: 10,
    paddingBottom: 50,
  },
  mainButtonContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
