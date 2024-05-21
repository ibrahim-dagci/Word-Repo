import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  bar: {
    backgroundColor: 'gray',
    borderRadius: 2.5,
    position: 'absolute',
    height: 5,
    width: 40,
    top: 10,
  },
  modalPressible: {
    flex: 0.48,
  },
});
