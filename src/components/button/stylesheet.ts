import Navigation from '../../navigation';
import {
    StyleSheet, 
    Platform
} from 'react-native';

export default StyleSheet.create({
    default: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 48,
        margin: 5,
    },
    ghost: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 3,
        margin: 0,
    },
    custom: {
    },
    titleGhost: {
        fontWeight: 'bold',
        color: '#53b5d5',
        fontSize: 10,
    },

    titleDefault: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    titleFAB: {
        fontWeight: 'bold',
        color: '#dddddd',
        fontSize: 40,
    },

    FAB: {
        borderRadius: Platform.OS === 'android' ? 32 : 35,
        height: Platform.OS === 'android' ? 64 : 70,
        width: Platform.OS === 'android' ? 64 : 70,
        backgroundColor: '#366E8F',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    disabled: {
        opacity: 0.2,
    },
});
