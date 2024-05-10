import {ReactNode, FC} from 'react';
import {Modal, View, Pressable} from 'react-native';
import stylesheet from './stylesheet';
import {ModalPrvider} from './context';

interface ModalProps {
  color?: string;
  children?: ReactNode;
  animationType?: 'slide' | 'none' | 'fade';
  visibilityControl: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const CustomModal: FC<ModalProps> = ({
  color = 'white',
  children,
  animationType = 'slide',
  visibilityControl,
}) => {
  const [modalVisible, setModalVisible] = visibilityControl;
  const modalHideOnPress = () => {
    setModalVisible(false);
  };
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable style={stylesheet.modalPressible} onPress={modalHideOnPress} />
      <View style={stylesheet.container}>
        <View style={{...stylesheet.modalView, backgroundColor: color}}>
          <View style={stylesheet.bar} />
          <ModalPrvider visibilityControl={visibilityControl}>
            {children}
          </ModalPrvider>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
