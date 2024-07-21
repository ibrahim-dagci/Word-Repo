import stylesheet from './stylesheet';
import {
    ReactNode, 
    FC
} from 'react';
import {
    Pressable,
    Modal, 
    View, 
} from 'react-native';
import {
    ModalPrvider
} from './context';

interface ModalProps {
  visibilityControl: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  animationType?: 'slide' | 'none' | 'fade';
  variant: 'bottom' | 'card';
  children?: ReactNode;
  color?: string;
}

const CustomModal: FC<ModalProps> = ({
    animationType = 'slide',
    visibilityControl,
    variant = 'bottom',
    color = 'white',
    children,
}) => {
    const [modalVisible, setModalVisible] = visibilityControl;
    const modalHideOnPress = () => {
        setModalVisible(false);
    };

    const Bottom = () => {
        return (
            <View style={stylesheet.container}>
                <Pressable
                    style={stylesheet.modalPressible}
                    onPress={modalHideOnPress}
                />
                <View style={{
                    ...stylesheet.bottom, backgroundColor: color
                }}>
                    <View style={stylesheet.bar} />
                    <ModalPrvider visibilityControl={visibilityControl}>
                        {children}
                    </ModalPrvider>
                </View>
            </View>
        );
    };

    const Card = () => {
        return (
            <Pressable
                style={[stylesheet.container, stylesheet.cardContainer]}
                onPress={modalHideOnPress}
            >
                <Pressable
                    style={{
                        ...stylesheet.card, backgroundColor: color
                    }}
                    onPress={undefined}
                >
                    <ModalPrvider visibilityControl={visibilityControl}>
                        {children}
                    </ModalPrvider>
                </Pressable>
            </Pressable>
        );
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
            {variant === 'bottom' && <Bottom />}
            {variant === 'card' && <Card />}
        </Modal>
    );
};

export default CustomModal;
