import {
    Dimensions, StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 22,
        flex: 1,
    },
    cloud: {
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        shadowOffset: {
            height: 5,
            width: 5, 
        },
    },
    text: {
        position: 'absolute',
        fontWeight: 'bold',
        bottom: 0,
        zIndex: 1,
    },
});
