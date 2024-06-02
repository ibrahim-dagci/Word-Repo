import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    shadowOffset: {width: 0, height: 5},
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
