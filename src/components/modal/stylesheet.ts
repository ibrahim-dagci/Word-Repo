import {
    Dimensions, StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 16,
        shadowColor: '#000',
        alignItems: 'center',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10,
        shadowOffset: {
            height: 5,
            width: 5,
        },
    },
    card: {
        height: (Dimensions.get('window').width / 1.4 / 3) * 4,
        width: Dimensions.get('window').width / 1.35,
        borderRadius: 15,
    },
    cardContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
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
