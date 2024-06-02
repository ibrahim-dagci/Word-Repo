import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
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
