import {ReactNode, FC} from 'react';
import {View} from 'react-native';
import stylesheet from './stylesheet';

interface ModalProps {
  color?: string;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({color = 'white', children}) => {
  return (
    <View style={stylesheet.container}>
      <View style={{...stylesheet.modalView, backgroundColor: color}}>
        {children}
      </View>
    </View>
  );
};

export default Modal;
