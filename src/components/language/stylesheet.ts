import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 4.3,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    color: '#dddddd',
    fontSize: 50,
  },
  image: {
    flex: 1,
  },
});
